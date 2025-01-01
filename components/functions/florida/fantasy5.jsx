function filterPlayedNumbers(numbers) {
   
    return new Promise((resolve, reject) => {

        let temp, sorted
        let returnArray = []
        let playedNumbers = {}
        let mostRecent = numbers[numbers.length - 1]

        for (let i = 0; i < numbers.length; i++) {

            if ((numbers[i].n1 in playedNumbers)) {
                playedNumbers[numbers[i].n1]++
            } else {
                playedNumbers[numbers[i].n1.toString()] = 1
            }

            if ((numbers[i].n2 in playedNumbers)) {
                playedNumbers[numbers[i].n2]++
            } else {
                playedNumbers[numbers[i].n2.toString()] = 1
            }

            if ((numbers[i].n3 in playedNumbers)) {
                playedNumbers[numbers[i].n3]++
            } else {
                playedNumbers[numbers[i].n3.toString()] = 1
            }

            if ((numbers[i].n4 in playedNumbers)) {
                playedNumbers[numbers[i].n4]++
            } else {
                playedNumbers[numbers[i].n4.toString()] = 1
            }

            if ((numbers[i].n5 in playedNumbers)) {
                playedNumbers[numbers[i].n5]++
            } else {
                playedNumbers[numbers[i].n5.toString()] = 1
            }

        }

        // Sort value by descending 
        sorted = Object.entries(playedNumbers).sort((a, b) => b[1] - a[1])

        // Cycle through sorted entries
        for (const [key, value] of Object.entries(sorted)) {

            // Transform each line from array into object 
            temp = Object.assign({}, value)

            returnArray.push(temp)
        }

        resolve({ status: true, filtered: returnArray })

    }).catch(e => console.log(e))
}

const getPatterns = async (results) => {
    return new Promise((resolve, reject) => {

        let thisdict = {}

        let returnArr = []

        results.map(e => {

            let patternArr = []

            let seqArr = e.sequence.split('-')

            seqArr.map(y => {
                patternArr.push(convertIntoPattern(parseInt(y)))
            })

            let pat = patternArr.join('')

            if ((pat in thisdict)) {
                thisdict[pat]++
            } else {
                thisdict[pat] = 1
            }

        })

        // Sort value by descending 
        let sorted = Object.entries(thisdict).sort((a, b) => b[1] - a[1])

        for (const [key, value] of Object.entries(sorted)) {
            let temp = Object.assign({}, value)

            returnArr.push(temp)

        }

        resolve({ status: true, patterns: returnArr })

    }).catch(e => console.log(e))

}

const convertIntoPattern = (num) => {

    if (1 <= num && num <= 9) {
        return 'A'
    }

    if (10 <= num && num <= 19) {
        return 'B'
    }

    if (20 <= num && num <= 29) {
        return 'C'
    }

    if (30 <= num && num <= 36) {
        return 'D'
    }

}

const convertIntoPatternFromArray = (arr) => {

    let finalArr = []

    arr.map(e => {
        finalArr.push(convertIntoPattern(e))
    })

    return finalArr.join('')

}

const convertIntoPatternSubPatternFromArray = (arr) => {
    let finalArr = []

    arr.map(e => {
        finalArr.push(convertIntoSubPattern(e))
    })

    return finalArr.join('')
}


const convertIntoSubPattern = (num) => {

    if (1 <= num && num <= 5) {
        return 'A1'
    }

    if (6 <= num && num <= 9) {
        return 'A2'
    }

    if (10 <= num && num <= 14) {
        return 'B1'
    }

    if (15 <= num && num <= 19) {
        return 'B2'
    }

    if (20 <= num && num <= 24) {
        return 'C1'
    }

    if (25 <= num && num <= 29) {
        return 'C2'
    }

    if (30 <= num && num <= 32) {
        return 'D1'
    }

    if (33 <= num && num <= 36) {
        return 'D2'
    }

}

const getSubPatterns = async (results) => {
    return new Promise((resolve, reject) => {

        let thisdict = {}

        let returnArr = []

        results.map(e => {

            let patternArr = []

            let seqArr = e.sequence.split('-')

            seqArr.map(y => {
                patternArr.push(convertIntoSubPattern(parseInt(y)))
            })

            let pat = patternArr.join('')

            if ((pat in thisdict)) {
                thisdict[pat]++
            } else {
                thisdict[pat] = 1
            }

        })

        let sorted = Object.entries(thisdict).sort((a, b) => b[1] - a[1])

        for (const [key, value] of Object.entries(sorted)) {
            let temp = Object.assign({}, value)

            returnArr.push(temp)

        }

        resolve({ status: true, subpatterns: returnArr })

    }).catch(e => console.log(e))
}


const getDoubles = async (results) => {

    return new Promise((resolve, reject) => {
        let thisdict = {}
        let arr = []
        let returnArr = []

        results.map(e => {

            let seqArr = e.sequence.split('-')

            let nm = adjustPattern(seqArr[0], seqArr[1])
            let nm2 = adjustPattern(seqArr[0], seqArr[2])
            let nm3 = adjustPattern(seqArr[0], seqArr[3])
            let nm4 = adjustPattern(seqArr[0], seqArr[4])
            let nm5 = adjustPattern(seqArr[1], seqArr[2])
            let nm6 = adjustPattern(seqArr[1], seqArr[3])
            let nm7 = adjustPattern(seqArr[1], seqArr[4])
            let nm8 = adjustPattern(seqArr[2], seqArr[3])
            let nm9 = adjustPattern(seqArr[2], seqArr[4])
            let nm10 = adjustPattern(seqArr[3], seqArr[4])

            arr.push(nm)
            arr.push(nm2)
            arr.push(nm3)
            arr.push(nm4)
            arr.push(nm5)
            arr.push(nm6)
            arr.push(nm7)
            arr.push(nm8)
            arr.push(nm9)
            arr.push(nm10)
        })

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] in thisdict) {
                thisdict[arr[i]]++
            } else {
                thisdict[arr[i]] = 1;
            }
        }

        let sorted = Object.entries(thisdict).sort((a, b) => b[1] - a[1])

        for (const [key, value] of Object.entries(sorted)) {

            let temp = Object.assign({}, value)

            returnArr.push(temp)
        }
        resolve({ status: true, doubles: returnArr })
    }).catch(e => console.log(e))
}


const getDoublesFromSingleArr = (seqArr) => {

    let arr = []

    let nm = adjustPattern(seqArr[0], seqArr[1])
    let nm2 = adjustPattern(seqArr[0], seqArr[2])
    let nm3 = adjustPattern(seqArr[0], seqArr[3])
    let nm4 = adjustPattern(seqArr[0], seqArr[4])

    let nm5 = adjustPattern(seqArr[1], seqArr[2])
    let nm6 = adjustPattern(seqArr[1], seqArr[3])
    let nm7 = adjustPattern(seqArr[1], seqArr[4])
    let nm8 = adjustPattern(seqArr[2], seqArr[3])

    let nm9 = adjustPattern(seqArr[2], seqArr[4])
    let nm10 = adjustPattern(seqArr[3], seqArr[4])

    arr.push(nm)
    arr.push(nm2)
    arr.push(nm3)
    arr.push(nm4)
    arr.push(nm5)
    arr.push(nm6)
    arr.push(nm7)
    arr.push(nm8)
    arr.push(nm9)
    arr.push(nm10)

    return arr
}

const adjustPattern = (num1, num2) => {

    let MAX = String(Math.max(num1, num2))

    let MIN = String(Math.min(num1, num2))

    return MIN + "-" + MAX
}


const getTriples = async (results) => {
    return new Promise((resolve, reject) => {

        let thisdict = {}
        let arr = []
        let returnArr = []

        results.map(e => {
            let seqArr = e.sequence.split('-')

            let tr = seqArr[0] + "-" + seqArr[1] + "-" + seqArr[2]
            let tr1 = seqArr[0] + "-" + seqArr[1] + "-" + seqArr[3]
            let tr2 = seqArr[0] + "-" + seqArr[1] + "-" + seqArr[4]
            let tr3 = seqArr[0] + "-" + seqArr[2] + "-" + seqArr[3]
            let tr4 = seqArr[0] + "-" + seqArr[2] + "-" + seqArr[4]
            let tr5 = seqArr[0] + "-" + seqArr[3] + "-" + seqArr[4]
            let tr6 = seqArr[1] + "-" + seqArr[2] + "-" + seqArr[3]
            let tr7 = seqArr[1] + "-" + seqArr[2] + "-" + seqArr[4]
            let tr8 = seqArr[2] + "-" + seqArr[3] + "-" + seqArr[4]
            let tr9 = seqArr[1] + "-" + seqArr[3] + "-" + seqArr[4]

            arr.push(tr)
            arr.push(tr1)
            arr.push(tr2)
            arr.push(tr3)
            arr.push(tr4)
            arr.push(tr5)
            arr.push(tr6)
            arr.push(tr7)
            arr.push(tr8)
            arr.push(tr9)

        })

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] in thisdict) {
                thisdict[arr[i]]++
            } else {
                thisdict[arr[i]] = 1;
            }
        }

        let sorted = Object.entries(thisdict).sort((a, b) => b[1] - a[1])

        for (const [key, value] of Object.entries(sorted)) {
            let temp = Object.assign({}, value)

            returnArr.push(temp)
        }
        resolve({ status: true, triples: returnArr })

    }).catch(e => console.log(e))
}

const getTriplesFromSingleArr = (seqArr) => {

    let arr = []

    let tr = seqArr[0] + "-" + seqArr[1] + "-" + seqArr[2]
    let tr1 = seqArr[0] + "-" + seqArr[1] + "-" + seqArr[3]
    let tr2 = seqArr[0] + "-" + seqArr[1] + "-" + seqArr[4]
    let tr3 = seqArr[0] + "-" + seqArr[2] + "-" + seqArr[3]
    let tr4 = seqArr[0] + "-" + seqArr[2] + "-" + seqArr[4]
    let tr5 = seqArr[0] + "-" + seqArr[3] + "-" + seqArr[4]
    let tr6 = seqArr[1] + "-" + seqArr[2] + "-" + seqArr[3]
    let tr7 = seqArr[1] + "-" + seqArr[2] + "-" + seqArr[4]
    let tr8 = seqArr[2] + "-" + seqArr[3] + "-" + seqArr[4]
    let tr9 = seqArr[1] + "-" + seqArr[3] + "-" + seqArr[4]

    arr.push(tr)
    arr.push(tr1)
    arr.push(tr2)
    arr.push(tr3)
    arr.push(tr4)
    arr.push(tr5)
    arr.push(tr6)
    arr.push(tr7)
    arr.push(tr8)
    arr.push(tr9)

    return arr
}

const inputFocus = (chkseq, setchkseq) => {
    
    let ff = chkseq.split('-')

    if (ff[0] === '') {
        return
    } else {
        setchkseq(ff[0] + ff[1] + ff[2] + ff[3] + ff[4])
    }

}

const funcInputBlur = (nums) => {

    let arr = []

    if (nums.length !== 0) {

        for (let i = 0; i < nums.length; i++) {
            arr.push(nums[i])
        }

        if (arr[0] === '-' || arr.length == 0) {
            return
        } else {
            arr.splice(2, 0, '-')
            arr.splice(5, 0, '-')
            arr.splice(8, 0, '-')
            arr.splice(11, 0, '-')
            return arr.join('')
        }
    } else {
        return ""
    }

    return
}


module.exports = {
    filterPlayedNumbers,
    getPatterns,
    convertIntoPatternFromArray,
    convertIntoPatternSubPatternFromArray,
    convertIntoSubPattern,
    getSubPatterns,
    getDoubles,
    getDoublesFromSingleArr,
    getTriples,
    getTriplesFromSingleArr,
    inputFocus,
    funcInputBlur
}