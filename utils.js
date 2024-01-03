const fs = require('node:fs')

const getInput = function (day, options = { split: true }) {
    let data = fs.readFileSync(`input/day${day}.txt`, 'utf-8')
    if (options.split) {
        data = data.split('\r\n')
    }
    return data
}

const readNumbers = function (s) {
    return [...s.matchAll(/\d+/g)].map(m => Number(m[0]))
}

module.exports = { getInput, readNumbers }