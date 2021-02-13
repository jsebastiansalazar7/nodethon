const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            description: "This is the body description",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(v) {
        console.log('Adding a new note', '\ntitle: ' + v.title, '\nbody: ' +v.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('Removing the note', argv)
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
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('Reading note', argv.title)
    }
})

yargs.parse()
