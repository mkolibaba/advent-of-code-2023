const { getInput, readNumbers } = require('./utils')
require('./prototypes')

const part1 = function () {
    let data = getInput(6),
        times = readNumbers(data[0]),
        distances = readNumbers(data[1])

    let records = Array(times.length).fill(0)
    for (let i = 0; i < times.length; i++) {
        let time = times[i],
            distance = distances[i]

        for (let t = 1; t < time; t++) {
            let travelled = (time - t) * t
            if (travelled > distance) {
                records[i]++
            }
        }
    }

    return records.multiply()
}

const part2 = function () {
    let data = getInput(6),
        time = Number(readNumbers(data[0]).join('')),
        distance = Number(readNumbers(data[1]).join(''))
    
    let records = 0
    for (let t = 1; t < time; t++) {
        let travelled = (time - t) * t
        if (travelled > distance) {
            records++
        }
    }

    return records
}

module.exports = { part1, part2 }