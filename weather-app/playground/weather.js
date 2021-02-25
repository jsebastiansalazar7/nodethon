const request = require("postman-request")
const uriBuilder = require("./uriBuilder")


const buildCoordinatesPair = (coordinates) => {
    const values = Object.values(coordinates)
    return values[0] + ',' + values[1]
}

const base = 'http://api.weatherstack.com'
const path = '/current'

const coordinates = {
    longitude: 6.230833,
    latitude: -75.590553
}
const queryParams = {
    access_key: '19192021767478bf06d972945cd0e22a', 
    query: buildCoordinatesPair(coordinates)
}

const uri = uriBuilder.buildUri(base, path, queryParams)

const weather = () => {
    request(uri, (error, response, body) => {
        const bodyJson = JSON.parse(body)
        const res = {
            temperature: bodyJson.current.temperature,
            thermalSensation: bodyJson.current.feelslike,
            windSpeed: bodyJson.current.wind_speed,
            pressure: bodyJson.current.pressure,
            humidity: bodyJson.current.humidity,
            visibility: bodyJson.current.visibility,
            description: bodyJson.current.weather_descriptions
        }
        console.log(res)
    })
}
weather(uri)
