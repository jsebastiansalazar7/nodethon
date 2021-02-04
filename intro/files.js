const fs = require('fs')

fs.writeFileSync('files/notes.txt', 'This file was created by Node.js!')

fs.appendFileSync('files/notes.txt', '\nThis was appended after the file creation')