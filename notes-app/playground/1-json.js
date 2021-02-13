const fs = require('fs')

const supermarketList = {
    title: "supermarket",
    items: {
        eggs: 12,
        milk: "3 bags",
        sausage: "1 bag",
        chocolate: 100
    } 
}
const jsonInicial = JSON.stringify(Array(supermarketList))
fs.writeFileSync("json/1-json.json", jsonInicial)

const schoolList = {
    title: 'school',
    items: {
        notebook: 8,
        pencil: 2,
        eraser: 1,
        books: Array("Math", "Science", "English")
    }  
}
schoolList.items.pencil = 3

const jsonFile = fs.readFileSync('json/1-json.json', 'utf8')
const list = JSON.parse(jsonFile)

list.push(schoolList)

const jsonFileNew = JSON.stringify(list)
fs.writeFileSync('json/1-json.json', jsonFileNew)
