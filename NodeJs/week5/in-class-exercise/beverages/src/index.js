import { Beverage, Beverages } from "./Beverage.js"
import express from "express"
import bodyParser from "body-parser"
import fs from "fs"

const heineken = new Beverage("heineken", false)
// heineken.name = null
// console.log(heineken)
// console.log(heineken.name)

const carlsberg = new Beverage("carlsberg", false)
const glogg = new Beverage("glogg", true)

const beverages = new Beverages(heineken, carlsberg, glogg)
// beverages.add(glogg)
// console.log(beverages)

const app = express()
// console.log(process.env)
const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Started listening at port ${ port }`)
})

// log incoming requests
app.use((req, res, next) => {
    console.log(req.method, req.path)
    // can raise error by passing into next
    next()
})

app.use('/public', express.static('public'))

app.use(bodyParser.urlencoded());
app.post('/public', (req, res) => {
    console.log(req.body);
    res.send('it is submitted');
})

app.use(bodyParser.json())

const beverageRouter = express.Router()
beverageRouter.get("/", (req, res) => {
    // console.log("Get all")
    res.send(beverages.beverages)
})

beverageRouter.post("/", (req, res) => {
    console.log(req.body)
    res.send("OK")
})

app.use("/bvg", beverageRouter)
// app.get("/public/*", (req, res) => {
//     res.send(fs.readFileSync(__dirname + "/.." + req.path, "utf-8"))
// })