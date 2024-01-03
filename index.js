const prompt = require("prompt-sync")({ sigint: true })

const days = [...Array(25).keys()].map(i => {
    let day = i + 1
    try {
        let m = require(`./Day${day}`),
            obj = {}
        obj[`${day}.1`] = m['part1']
        obj[`${day}.2`] = m['part2']
        return obj
    } catch (e) {
        return {}
    }
}).reduce((acc, v) => ({ ...acc, ...v }), {})

let day = prompt("Day: ")
let result = days[day]()
console.log(`Result: ${result}`)