const connection = require('../../../db')

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

module.exports = { 
    selectDataByNumbMid,
    selectAllFromF5Mid,
    selectAllFromF5Eve,
    selectDataByNumbEve
}

