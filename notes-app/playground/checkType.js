const utils = require('./utils.js')

const variable = process.argv[2]

let checkArgType = (variableToCheck) => {
    if (utils.isNumber(variableToCheck)) {
        console.log(variable + " is a number")
    } else {
        console.log(variable + " is a string")
    }
}

if (variable != undefined) {
    const parsedValue = parseFloat(variable)
    checkArgType(variable)
} else {
    console.log("Please provide an argument")
}