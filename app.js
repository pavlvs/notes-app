const validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes.js')

const myNote = getNotes()

console.log(myNote)

console.log(validator.isEmail('pavlvsxavier2gmail.com'))

console.log(chalk.green.bold.inverse('Success'))