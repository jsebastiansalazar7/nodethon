const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=e9d4a01c4f9092410e89e06634b043e3&query=37.8267,-122.4233'

request({url : url}, (error,response) => {
    const data = JSON.parse(response.body)
    console.log(data)
    console.log(data.current)
})

