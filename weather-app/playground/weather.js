const request = require("postman-request")
const uriBuilder = require("./uriBuilder")

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
        const bodyJson = JSON.parse(body)
        if (bodyJson.error !== 'undefined') {
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
            console.log(`It is currently ${res.description} ${res.temperature} ${searchInfo.temperatureUnit}, ` + 
                `but feels like ${res.thermalSensation} ${searchInfo.temperatureUnit}. ` +
                `The humidity is ${res.humidity} g/m3 ` +
                `at ${bodyJson.location.name}, ${bodyJson.location.country}`)
        } else {
            console.log(`Weather information not found for the provided location ${JSON.stringify(notationInfo.place)}`)
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
