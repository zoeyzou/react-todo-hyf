const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const cars_route = require('./cars_route');


// parse application/json
app.use(bodyParser.json())

app.use('/cars', cars_route)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))