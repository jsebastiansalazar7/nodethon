const utils = require('./utils.js')
const notes = require('./notes.js')
const validator = require('validator')
const chalk = require('chalk')

console.log(utils.name, '\n' + utils.age)

console.log(utils)

console.log(utils.add(1,'h'))

console.log(notes.getNotes())

console.log('Real email? ' + validator.isEmail('valensagnin@gmail.com'))
console.log('Real URL? '+ validator.isURL('https://www.'))

const error = chalk.bold.red
const warning = chalk.bold.keyword('orange')
const working = chalk.bold.blueBright
const success = chalk.bold.green
console.log(chalk.underline.bgWhiteBright.green.bold.inverse('Welcome!'))
console.log(error('Wrong!'+ '\n'),warning('Warning!'+ '\n'), working('Working!'+ '\n'), success('Success!'+ '\n'))


 