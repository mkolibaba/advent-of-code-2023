const { getInput } = require('./utils')
require('./prototypes')

const part1 = function () {
    const rows = getInput(3)
    const width = rows[0].length
    const height = rows.length
    const numbers = '0123456789'.split('')
    let result = 0

    for (let r = 0; r < width; r++) {
        let row = rows[r]
        result += [...row.matchAll(/(\d+)/g)].map(m => {
            let val = m[0],
                index = m.index,
                length = val.length,
                ru = r - 1,
                rl = r + 1

            if (ru >= 0) {
                let upper = rows[ru];
                for (let c = index - 1; c <= index + length; c++) {
                    if (c >= 0 && c < width) {
                        if (!numbers.includes(upper[c]) && upper[c] !== '.') {
                            return Number(val)
                        }
                    }
                }
            }

            if (rl < height) {
                let lower = rows[rl]
                for (let c = index - 1; c <= index + length; c++) {
                    if (c >= 0 && c < width) {
                        if (!numbers.includes(lower[c]) && lower[c] !== '.') {
                            return Number(val)
                        }
                    }
                }
            }

            let cbefore = index - 1,
                cafter = index + length

            if (cbefore >= 0) {
                if (!numbers.includes(row[cbefore]) && row[cbefore] !== '.') {
                    return Number(val)
                }
            }

            if (cafter < width) {
                if (!numbers.includes(row[cafter]) && row[cafter] !== '.') {
                    return Number(val)
                }
            }

            return 0
        }).sum()
    }

    return result
}

const part2 = function () {
}

module.exports = { part1, part2 }