
const express = require('express')
const path = require('path')
const bodyParser = require("body-parser")
const cors = require("cors")
const cookieParse = require('cookie-parser')

// init express
var app = express()

// server static files
app.use('/public', express.static(path.join(__dirname, 'public')))

// allow cross origin
app.use(cors());

// parse request bodies (req.body)
app.use(express.urlencoded({ extended: true }))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse applilcation/json
app.use(bodyParser.json());

app.use(cookieParse())

global.domain = '';


app.use((req, res, next) => {
    domain = req.hostname;
});
app.use(require('./controller/index'));

app.use((err, req, res, next) => {

    console.log(err);
    // res.status(500).render('error');
    res.send(500)
})

app.use((req, res, next) => {
    // res.status(404).render('error');
    res.status(404).send("srroy Wrong URl");
})

app.listen(3000, () => console.log(`Example app listening at http://${global.domain}`))
