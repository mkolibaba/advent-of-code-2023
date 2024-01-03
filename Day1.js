const { getInput } = require('./utils')
require('./prototypes')

const part1 = function () {
    return getInput(1)
        .map(s => {
            let n = '';
            for (let i = 0; i < s.length; i++) {
                if (!isNaN(s[i])) {
                    n += s[i];
                    break;
                }
            }
            for (let i = s.length - 1; i >= 0; i--) {
                if (!isNaN(s[i])) {
                    n += s[i];
                    break;
                }
            }
            return Number(n);
        })
        .sum()
}

const part2 = function () {
    const numbers = [
        ["zero", '0'],
        ["one", '1'],
        ["two", '2'],
        ["three", '3'],
        ["four", '4'],
        ["five", '5'],
        ["six", '6'],
        ["seven", '7'],
        ["eight", '8'],
        ["nine", '9']
    ]
    return getInput(1)
        .map(s => {
            let n = '';
            for (let i = 0; i < s.length; i++) {
                if (!isNaN(s[i])) {
                    n += s[i];
                    break;
                } else {
                    let flag = false;
                    let sub = s.substring(0, i + 1)
                    for (let j = 0; j < numbers.length; j++) {
                        if (sub.includes(numbers[j][0])) {
                            n += numbers[j][1]
                            flag = true
                            break;
                        }
                    }
                    if (flag) {
                        break
                    }
                }
            }
            for (let i = s.length - 1; i >= 0; i--) {
                if (!isNaN(s[i])) {
                    n += s[i];
                    break;
                } else {
                    let flag = false;
                    let sub = s.substring(i, s.length)
                    for (let j = 0; j < numbers.length; j++) {
                        if (sub.includes(numbers[j][0])) {
                            n += numbers[j][1]
                            flag = true
                            break;
                        }
                    }
                    if (flag) {
                        break
                    }
                }
            }
            return Number(n);
        })
        .sum()
}

module.exports = { part1, part2 }