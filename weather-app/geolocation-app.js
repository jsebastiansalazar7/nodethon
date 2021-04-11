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
        geolocation.getCoordinates(s.place)
    }
})
yargs.parse()
