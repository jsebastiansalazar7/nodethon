const fs = require ('fs')
const PATH = 'json/notes.json'

const getNotes = function() {
    return 'Your notes...'
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
        console.log(`The note '${title}' has been added!`)
    } else {
        console.log("Duplicated note")
    }
}

const removeNote = function (title) {
    const notes = loadNotes()
    
    const notesToKeep = notes.filter((notes) => title != notes.title)
    if (notesToKeep.length < notes.length) {
        saveNotes(notesToKeep)
        console.log(`The note '${title}' has been deleted`)
    } else {
        console.log("That title does not exist")
    }
}

const loadNotes = function () {
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
}

module.exports = {
    getNotes, 
    addNotes,
    removeNote
}
