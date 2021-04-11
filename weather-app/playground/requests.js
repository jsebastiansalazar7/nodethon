const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=e9d4a01c4f9092410e89e06634b043e3&query=37.8267,-122.4233'
const urlGeo = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Paris.json?access_token=pk.eyJ1IjoidmFsZW5zYWciLCJhIjoiY2tseWd5MWp0M2prdDJwcG0yMmdsdWpiZyJ9.ULcvfGcQxJQJqi5DcCws3w&limit=1&language=en'

request(url, (error, response, body) => {
    console.log("Temperature response")
    const data = JSON.parse(body)
    console.log(`Temperatue: ${data.current.temperature} ºC`)
})

request(urlGeo, (error, response, body) => {
    console.log("Geolocation response")
    const dataGeo = JSON.parse(body)
    const coordinate = dataGeo.features[0].center
    console.log(`Latitude: ${coordinate[1]}, Longitude: ${coordinate[0]}`)
})
