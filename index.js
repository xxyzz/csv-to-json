const fs = require('fs')
const csv = require('csvtojson')
let arr = []
csv()
.fromFile('customer-data.csv')
    .on('json', (jsonObj) => {
        arr.push(jsonObj)
    })
    .on('done', (error) => {
        if (error) return process.exit(1)
        console.log(arr)
        fs.writeFileSync('customer-data-solution.json', JSON.stringify(arr, null, 2), (error) => {
            if (error) return process.exit(1)
            console.log('end')
            process.exit(0)
        })
    })
