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
        notes.addNotes(v.title, v.body)
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
        notes.removeNote(argv.title)

    }
})

yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function() {
        notes.listNotes()
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
        notes.readNote(argv.title)
    }
})

yargs.parse()
