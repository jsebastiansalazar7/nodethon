const yargs = require('yargs')
const geolocation = require('./requests/geolocation.js')

yargs.command({
    command: 'search',
    describe: 'Search the place',
    builder: {
        place: {
            alias: 'p',
            describe: 'Place',
            demandOption: true,
            type: 'string'
        }
    },
    handler(s) {
        if (s.place.length === 0) {
            console.error("A place must be provided")
        } else {
            geolocation.getCoordinates(s.place)
        }  
    }
})
yargs.parse()
