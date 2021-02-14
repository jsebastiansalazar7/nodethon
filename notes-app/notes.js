const fs = require('fs')
const format = require('./utils/logFormat.js')

const PATH = 'json/notes.json'

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    
    if (note) {
        console.log(format.boldGreen(title))
        console.log(format.inverse(note.body))
        
    } else {
        console.log('The requested note does not exist')
    }
}

const listNotes = () => {
    const notes = loadNotes()
    notes.forEach(note => {
        console.log(format.boldGreen(note.title))
        console.log(format.inverse(note.body + "\n"))
    });
}

const addNotes = (title, body) => {
    const notes = loadNotes()

    const newNote = {
        title: title,
        body: body
    }

    const duplicateNote = notes.find((note) => note.title === newNote.title)

    if (!duplicateNote) {
        notes.push(newNote)
        saveNotes(notes)
        console.log(`The note '${format.success(title)}' has been added!`)
    } else {
        console.log("Duplicated note")
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    
    const notesToKeep = notes.filter((notes) => title !== notes.title)
    if (notesToKeep.length < notes.length) {
        saveNotes(notesToKeep)
        console.log(`The note '${format.warning(title)}' has been deleted`)
    } else {
        console.log("That title does not exist")
    }
}

const loadNotes = () => {
    try {
        const data = fs.readFileSync(PATH, 'utf8')
        return JSON.parse(data)
    } catch (e) {
        return []
    }
}

const saveNotes =  (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync(PATH, dataJson)
}

module.exports = {
    addNotes,
    readNote,
    listNotes,
    removeNote
}
