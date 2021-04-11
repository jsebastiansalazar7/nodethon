
const buildUri = (base, path, queryParams) => {
    const keyValuePairs = Object.entries(queryParams)
    let queryValues = ''
    for (let i = 0; i < keyValuePairs.length - 1; i++) {
        queryValues = queryValues + keyValuePairs[i][0] + '=' + keyValuePairs[i][1] + '&'
    }

    queryValues = queryValues + keyValuePairs[keyValuePairs.length - 1][0] + '=' + 
        keyValuePairs[keyValuePairs.length - 1][1]
    return base + path + '?' + queryValues
}

module.exports = {
    buildUri
}