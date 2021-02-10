const var1 = process.argv[2]
const var2 = process.argv[3]

const utils = require('./utils.js')

let sum = (var1, var2) => {
    const n1 = parseFloat(var1)
    const n2 = parseFloat(var2)

    if (utils.isNumber(n1) && utils.isNumber(n2)) {
        console.log(n1 + n2)
    } else {
        console.log('Please enter only numbers')
    }
    
}

if (var1 === undefined || var2 === undefined) {
    console.log('Please enter 2 numbers')
} else {
    sum(var1, var2)
}
