const request = require("postman-request")
const uriBuilder = require("../utils/uriBuilder")

const base = 'http://api.weatherstack.com'
const path = '/current'

const loadNotationInfo = (searchInfo, unitValue) => {
    switch (unitValue) {
        case 'F':
            searchInfo.temperatureUnit = 'ºF'
            searchInfo.notation = 'f'
            break;
        case 'K':
            searchInfo.temperatureUnit = 'K'
            searchInfo.notation = 's';
        default:
            break;
    }
}

const buildCoordinatesPair = (coordinates) => {
    const values = Object.values(coordinates)
    return values[0] + ',' + values[1]
}

const getWeather = (uri, searchInfo) => {
    request(uri, (error, response, body) => {
        if (error !== null) {
            console.log('A General Error occured when attempting to retrieve the weather forecast')
            return
        } 

        const bodyJson = JSON.parse(body)
    
        if (bodyJson.error !== undefined) {
            console.log(`Code: ${bodyJson.error.code} ` + '\n' +
            `Type: ${bodyJson.error.type} ` + '\n' +
            `Info: ${bodyJson.error.info}.`)
        } else {        
            const res = {
                temperature: bodyJson.current.temperature,
                thermalSensation: bodyJson.current.feelslike,
                windSpeed: bodyJson.current.wind_speed,
                precipitation: bodyJson.current.precip,
                pressure: bodyJson.current.pressure,
                humidity: bodyJson.current.humidity,
                visibility: bodyJson.current.visibility,
                description: bodyJson.current.weather_descriptions
            }

            thermalSence = (res.temperature === res.thermalSensation) ? `and it feels the same.` : `but feels like ${res.thermalSensation} ${searchInfo.temperatureUnit}.` 

            console.log(`At ${bodyJson.location.name}-${bodyJson.location.country},`+` It is currently ${res.temperature} ${searchInfo.temperatureUnit}, `+ 
                thermalSence,'\n' +
                `The weather is ${res.description} and the humidity is ${res.humidity} g/m3.`)
        }
    })
}

const getWeatherInfo = (searchInfo) => {
    const queryParams = {
        access_key: '19192021767478bf06d972945cd0e22a', 
        query: searchInfo.place.latitude === undefined ? 
            searchInfo.place : 
            buildCoordinatesPair(searchInfo.place),
        units: searchInfo.notation
    }

    const uri = uriBuilder.buildUri(base, path, queryParams)

    getWeather(uri, searchInfo)
}

module.exports = {
    loadNotationInfo,
    getWeatherInfo
}
