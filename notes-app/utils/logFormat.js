const chalk = require('chalk')

const success = chalk.green
const error = chalk.red
const warning = chalk.keyword('orange')

const boldGreen = chalk.bold.green
const boldRed = chalk.red.bold
const inverse = chalk.inverse

module.exports = {
    success : success,
    error : error,
    warning : warning,
    boldGreen : boldGreen,
    boldRed : boldRed,
    inverse: inverse
}