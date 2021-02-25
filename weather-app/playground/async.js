console.log('Starting')

setTimeout(() => {
    console.log('Waiting for 2 seconds')
}, 2000)

setTimeout(() => {
    console.log('Waiting for 0 seconds')
})

console.log('Stopping')