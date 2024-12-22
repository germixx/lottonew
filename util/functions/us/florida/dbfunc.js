const connection = require('../../../db')

function fixDate(date) {
    console.log(date)
    // console.log(date)

    return date
}

// Select ALL numbers from evening table in FLFant5
async function selectAllFromF5Eve() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT id,date,sequence,n1,n2,n3,n4,n5 FROM evening', [], (err, rows) => {
            if (err) throw err
            resolve({ status: true, rows })
        })
        // resolve(true)
    })
}

// Select ALL numbers from midday table in FLFant5
async function selectAllFromF5Mid() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT id,date,sequence,n1,n2,n3,n4,n5 FROM midday', [], (err, rows) => {
            if (err) throw err
            resolve({ status: true, rows })
        })
        // resolve(true)
    })
}

async function selectDataByNumbMid(sequence) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT id,date,sequence,n1,n2,n3,n4,n5 FROM midday WHERE sequence=?', [sequence], (err, rows) => {
            if (err) throw err
            resolve({ status: true, rows })
        })
        // resolve(true)
    })
}

async function selectDataByNumbEve(sequence) {
    return new Promise((resolve, reject) => {
        connection.query('SELECT id,date,sequence,n1,n2,n3,n4,n5 FROM evening WHERE sequence=?', [sequence], (err, rows) => {
            if (err) throw err
            resolve({ status: true, rows })
        })
        // resolve(true)
    })
}

async function getLatestEntryEve () {
    return new Promise((resolve, reject) => {

        try {
            connection.query('SELECT * FROM evening WHERE id=(SELECT max(id) FROM evening)', [], (err, rows) => {

                if (err) throw err

                console.log(rows, ' si dates')
                resolve({
                    success: true,
                    result: {
                        date: fixDate(rows[0].date),
                        sequence: rows[0].sequence,
                        numbers: {
                            n1: rows[0].n1,
                            n2: rows[0].n2,
                            n3: rows[0].n3,
                            n4: rows[0].n4,
                            n5: rows[0].n5,
                        },
                        jackpot: rows[0].jackpot
                    },
                })
            })
        }

        catch (error) {
            console.log(error)
        }

    })

}

async function getLatestEntryMid () {
    return new Promise((resolve, reject) => {

        try {
            connection.query('SELECT * FROM midday WHERE id=(SELECT max(id) FROM midday)', [], (err, rows) => {

                if (err) throw err

                console.log(rows, ' si dates')
                resolve({
                    success: true,
                    result: {
                        date: fixDate(rows[0].date),
                        sequence: rows[0].sequence,
                        numbers: {
                            n1: rows[0].n1,
                            n2: rows[0].n2,
                            n3: rows[0].n3,
                            n4: rows[0].n4,
                            n5: rows[0].n5,
                        },
                        jackpot: rows[0].jackpot
                    },
                })
            })
        }

        catch (error) {
            console.log(error)
        }

    })

}


async function getResultsByCount(session, number) {
    
    let quer = "SELECT * FROM (SELECT * FROM " + session + " ORDER BY id DESC LIMIT ? ) sub ORDER BY id ASC";

    return new Promise((resolve, reject) => {
        connection.query(quer, [ parseInt(number)], (err, rows) => {
            
            if (err) throw err

            resolve({ status: true, rows })
        })
        // resolve(true)
    })
}


module.exports = { 
    selectDataByNumbMid,
    selectAllFromF5Mid,
    selectAllFromF5Eve,
    selectDataByNumbEve,
    getLatestEntryEve,
    getLatestEntryMid,
    getResultsByCount
}

