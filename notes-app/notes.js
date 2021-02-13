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
    } else {
        console.log("Duplicated note")
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
    console.log("New note added!")
}

module.exports = {
    getNotes, 
    addNotes
}
