const { getInput } = require('./utils')
require('./prototypes')

const part1 = function () {
    let data = getInput(5),
        seeds = [...data[0].matchAll(/\d+/g)].map(m => Number(m[0])),
        mappers = [[]],
        mi = 0

    for (let i = 3; i < data.length; i++) {
        let s = data[i]
        if (s === '') {
            i++
            mi++
            mappers[mi] = []
            continue
        }

        let row = [...s.matchAll(/\d+/g)].map(m => Number(m[0]))

        mappers[mi].push(mapperFn(row[0], row[1], row[2]))
    }

    let result = [...seeds]
    for (let i = 0; i < mappers.length; i++) {
        let temp = []
        for (let s = 0; s < result.length; s++) {
            let val = null
            for (let j = 0; j < mappers[i].length; j++) {
                let mapper = mappers[i][j]
                val = mapper(result[s])
                if (result[s] !== val) {
                    break
                }
            }
            temp.push(val)
        }
        result = temp
    }

    return result.min()
}

const part2 = function () {
    let data = getInput(5),
        seeds = [...data[0].matchAll(/\d+/g)].map(m => Number(m[0])),
        mappers = [[]],
        mi = 0

    for (let i = 3; i < data.length; i++) {
        let s = data[i]
        if (s === '') {
            i++
            mi++
            mappers[mi] = []
            continue
        }

        let row = [...s.matchAll(/\d+/g)].map(m => Number(m[0]))

        mappers[mi].push(mapperFn(row[0], row[1], row[2]))
    }

    // let start1 = seeds[0],
    //     range1 = seeds[1],
    //     start2 = seeds[2],
    //     range2 = seeds[3]

    let result = []
    for (let i = start1; i < start1 + range1; i++) {
        result.push(start1 + i)
    }
    for (let i = start2; i < start2 + range2; i++) {
        result.push(start2 + i)
    }

    for (let i = 0; i < mappers.length; i++) {
        let temp = []
        for (let s = 0; s < result.length; s++) {
            let val = null
            for (let j = 0; j < mappers[i].length; j++) {
                let mapper = mappers[i][j]
                val = mapper(result[s])
                if (result[s] !== val) {
                    break
                }
            }
            temp.push(val)
        }
        result = temp
    }

    return result.min()
}

function mapperFn(dest, source, range) {
    return function (val) {
        return source <= val && val < (source + range) ? val - source + dest : val
    }
}

module.exports = { part1, part2 }