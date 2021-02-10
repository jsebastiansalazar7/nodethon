
const variable = process.argv[2]

let checkArgType = (variableToCheck) => {
    if (isNumber(variableToCheck)) {
        console.log(variable + " is a number")
    } else {
        console.log(variable + " is a string")
    }
}

let isNumber = (value) => !isNaN(value) && isFinite(value)

if (variable != undefined) {
    const parsedValue = parseFloat(variable)
    checkArgType(variable)
} else {
    console.log("Please provide an argument")
}
