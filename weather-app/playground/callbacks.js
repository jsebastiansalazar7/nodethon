let callback = () => {
    console.log('Callback function has been called')
}

setTimeout(callback, 2000)

const names = ['Ninit', 'Zhenya', 'JS']
const shortNames = names.filter((name) => {
    return name.length <= 4
})
console.log(shortNames)

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data)
    }, 2000)
}

geocode('Philadelphia', (d) => {
    console.log(d)
})
