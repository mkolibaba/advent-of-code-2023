const { getInput } = require('./utils')
require('./prototypes')

const part1 = function () {
    const games = getInput(2),
        allowed = {
            'red': 12,
            'green': 13,
            'blue': 14
        }
    return games.map(g => {
        let number = Number(g.match(/^(Game )(\d+).+$/)[2])
        let rounds = g.split(': ')[1].split('; ')
        for (let i = 0; i < rounds.length; i++) {
            let reds = [...rounds[i].matchAll(/(\d+)( red)/g)].map(m => Number(m[1])).sum()
            if (allowed['red'] < reds) {
                return 0
            }
            let greens = [...rounds[i].matchAll(/(\d+)( green)/g)].map(m => Number(m[1])).sum()
            if (allowed['green'] < greens) {
                return 0
            }
            let blues = [...rounds[i].matchAll(/(\d+)( blue)/g)].map(m => Number(m[1])).sum()
            if (allowed['blue'] < blues) {
                return 0
            }
        }
        return number;
    }).sum()
}

const part2 = function () {
    return getInput(2).map(g => {
        let reds = [...g.matchAll(/(\d+)( red)/g)].map(m => Number(m[1])).reduce((acc, v) => Math.max(acc, v), 0)
        let greens = [...g.matchAll(/(\d+)( green)/g)].map(m => Number(m[1])).reduce((acc, v) => Math.max(acc, v), 0)
        let blues = [...g.matchAll(/(\d+)( blue)/g)].map(m => Number(m[1])).reduce((acc, v) => Math.max(acc, v), 0)
        let result = reds * greens * blues;
        return result;
    }).sum()
}

module.exports = { part1, part2 }