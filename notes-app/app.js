const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log('Adding a new note')
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing a note')
    }
})

yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function() {
        console.log('Listing notes')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Reading note')
    }
})

yargs.parse()
