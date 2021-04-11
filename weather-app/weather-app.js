const yargs = require('yargs')
const weather = require('./requests/weather.js')

let searchInfo = {
    temperatureUnit: 'ºC',
    notation: 'm',
    place: ''
}

yargs.command({
    command: 'forecast',
    description: 'Weather forecast summary by city name',
    builder: {
        unit: {
            alias: 'u',
            describe: 'Temperature unit',
            demandOption: false,
            type: 'string'
        },
        city: {
            alias: 'c',
            describe: 'City name',
            demandOption: true,
            type: 'string'
        }
    },
    handler(u) {
        if (u.unit !== undefined) {
            const unitValue = u.unit.toUpperCase()
            weather.loadNotationInfo(searchInfo, unitValue)
        }
        if (u.city.length === 0) {
            throw new Error('A city name must be provided')
        } else {
            searchInfo.place = u.city
        }
        weather.getWeatherInfo(searchInfo)
    }
})

yargs.command({
    command: 'forecast-coordinates',
    description: 'Weather forecast summary by coordinates',
    builder: {
        unit: {
            alias: 'u',
            describe: 'Temperature unit',
            demandOption: false,
            type: 'string'
        },
        longitude: {
            alias: 'lon',
            describe: 'Longitude',
            demandOption: true,
            type: 'string'
        },
        latitude: {
            alias: 'lat',
            describe: 'Latitude',
            demandOption: true,
            type: 'string'
        }
    },
    handler(u) {
        if (u.unit !== undefined) {
            const unitValue = u.unit.toUpperCase()
            weather.loadNotationInfo(searchInfo, unitValue)
        }
        if (u.longitude.length !== 0 && u.latitude.length !== 0) {
            searchInfo.place = {
                latitude: u.latitude,
                longitude: u.longitude
            }
        } else {
            throw new Error('Both the longitude and latitude must be provided')
        }
        weather.getWeatherInfo(searchInfo)
    }
})

yargs.parse()
