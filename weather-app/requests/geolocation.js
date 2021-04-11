const request = require('postman-request')
const uriBuilder = require('../utils/uriBuilder')

let path
const BASE = "https://api.mapbox.com"
const RAW_PATH = "/geocoding/v5/mapbox.places/"

const buildPath = (place) => {
    return RAW_PATH + place + '.json' 
}

const params = {
    access_token : 'pk.eyJ1IjoidmFsZW5zYWciLCJhIjoiY2tseWd5MWp0M2prdDJwcG0yMmdsdWpiZyJ9.ULcvfGcQxJQJqi5DcCws3w',
    limit : 1,
    language : 'en'
}

const geolocalization = (uri) => {
    request(uri, (error, response, body) => {
        if (error !== null) {
            console.log('A General Error occured when attempting to retrieve the weather forecast')
            return
        }

        const bodyJson = JSON.parse(body)

        if (bodyJson.message !== undefined) {
            console.log(`Message: `, bodyJson.message)
        } else {
            const place = bodyJson.features[0].place_name
            const coordinates = bodyJson.features[0].center
            console.log(`Place: ${place},  Latitude: ${coordinates[1]}, Longitude: ${coordinates[0]}.`)
        }
    })
}

const getCoordinates = (place) => {
    path = buildPath(place)
    const uri = uriBuilder.buildUri(BASE, path, params)
    geolocalization(uri)
}

module.exports = {
    getCoordinates
}
