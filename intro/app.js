const validator = require('validator')
const chalk = require('chalk')

const utils = require('./utils.js')
const notes = require('./notes.js')

const successTheme = chalk.green.bold
const warningTheme = chalk.keyword('orange')
const errorTheme = chalk.bgRed.bold

console.log('Utils module exports \n', utils)

console.log(utils.name)

console.log(utils.add(1, 2))

console.log(notes.getNotes())

const email = 'email@email.com'
console.log('\nIs ' + email + ' a valid email? ' + validator.isEmail(email))

const url = 'www.website.com'
console.log('Is ' + url + ' a valid url? ' + validator.isURL(url))

console.log(successTheme("Success!"))
console.log(warningTheme("Warning!!"))
console.log(errorTheme("Error!!!"))
