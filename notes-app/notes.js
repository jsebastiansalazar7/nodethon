const fs = require('fs')
const chalk = require('chalk')

const PATH = 'json/notes.json'

const readNote = function (title) {
    const notes = loadNotes()
    const noteToRead = notes.filter((note) => note.title === title)

    if (noteToRead.length > 0) {
        console.log(chalk.bold.green(title))
        console.log(chalk.inverse(noteToRead[0].body))
    } else {
        console.log('The requested note does not exist')
    }

}

const listNotes = function() {
    const notes = loadNotes()
    notes.forEach(element => {
        console.log(chalk.bold.green(element.title))
        console.log(chalk.inverse(element.body + "\n"))
    });
}

const addNotes = function(title, body) {
    // TODO: Add notes
    const notes = loadNotes()

    const newNote = {
        title: title,
        body: body
    }

    const duplicateNotes = notes.filter((note) => note.title === newNote.title)

    if (duplicateNotes.length === 0) {
        notes.push(newNote)
        saveNotes(notes)
    } else {
        console.log("Duplicated note")
    }
}

const loadNotes = function() {
    try {
        const data = fs.readFileSync(PATH, 'utf8')
        return JSON.parse(data)
    } catch (e) {
        return []
    }
}

const saveNotes = function (notes) {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync(PATH, dataJson)
    console.log("New note added!")
}

module.exports = {
    addNotes,
    readNote,
    listNotes
}
