const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const courseRoute = require('./course_route');

app.use(bodyParser.json());
app.use('/courses', courseRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));