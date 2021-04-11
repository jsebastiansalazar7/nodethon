let print = (operation, result) => {
    console.log(`${operation}: ${result}`)
}

let add = (a, b, callback) => {
    let sum = a + b
    setTimeout(() => {
        callback('Addition: ', sum)
    }, 2000)
}

add(1, 4, print)

let substract = (a, b, callback) => {
    let sub = a - b
    setTimeout(() => {
        callback('Substraction:', sub)
    }, 2000)
}

substract(4, -8, print)

let divide = (a, b, callback) => {
    if(b === 0) {
        return console.log('The denominator has to be a number different of cero')
    } else {
        let div = a / b
        setTimeout(() => {
            callback('Division: ', div)
        }, 2000)
    }
}

divide(-4, -2, print)

let multiply = (a, b, callback) => {
    let prod = a * b
    setTimeout(() => {
        callback('Multiplication: ',prod)
    }, 2000)
}

multiply(30, 40, print)