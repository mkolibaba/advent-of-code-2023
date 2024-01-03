const { getInput } = require('./utils')
require('./prototypes')

const part1 = function () {
    return getInput(4).map(card => {
        let [winning, have] = card.split(': ')[1].split(' | ')
        winning = [...winning.matchAll(/\d+/g)].map(m => m[0])
        have = [...have.matchAll(/\d+/g)].map(m => m[0])
        let matches = have.filter(val => winning.includes(val)).length
        return matches === 0 ? 0 : Math.pow(2, matches - 1)
    }).sum()
}

const part2 = function () {
    const cards = getInput(4),
        total = Array(cards.length).fill(1)

    for (let i = 0; i < cards.length - 1; i++) {
        let [winning, have] = cards[i].split(': ')[1].split(' | ')
        winning = [...winning.matchAll(/\d+/g)].map(m => m[0])
        have = [...have.matchAll(/\d+/g)].map(m => m[0])
        let matches = have.filter(val => winning.includes(val)).length

        for (let j = i + 1; j < cards.length && j <= i + matches; j++) {
            total[j] += total[i];
        }
    }

    return total.sum()
}

module.exports = { part1, part2 }