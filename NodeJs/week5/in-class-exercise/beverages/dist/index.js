"use strict";

var _Beverage = require("./Beverage.js");

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const heineken = new _Beverage.Beverage("heineken", false);
// heineken.name = null
// console.log(heineken)
// console.log(heineken.name)

const carlsberg = new _Beverage.Beverage("carlsberg", false);
const glogg = new _Beverage.Beverage("glogg", true);

const beverages = new _Beverage.Beverages(heineken, carlsberg, glogg);
// beverages.add(glogg)
// console.log(beverages)

const app = (0, _express2.default)();
// console.log(process.env)
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Started listening at port ${port}`);
});

// log incoming requests
app.use((req, res, next) => {
    console.log(req.method, req.path);
    // can raise error by passing into next
    next();
});

app.use('/public', _express2.default.static('public'));

app.use(_bodyParser2.default.urlencoded());
app.post('/public', (req, res) => {
    console.log(req.body);
    res.send('it is submitted');
});
app.use(_bodyParser2.default.json());

const beverageRouter = _express2.default.Router();
beverageRouter.get("/", (req, res) => {
    // console.log("Get all")
    res.send(beverages.beverages);
});

beverageRouter.post("/", (req, res) => {
    console.log(req.body);
    res.send("OK");
});

app.use("/bvg", beverageRouter);
// app.get("/public/*", (req, res) => {
//     res.send(fs.readFileSync(__dirname + "/.." + req.path, "utf-8"))
// })
//# sourceMappingURL=index.js.map