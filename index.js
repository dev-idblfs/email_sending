
const express = require('express')
const path = require('path')
const bodyParser = require("body-parser")
const cors = require("cors")
const cookieParse = require('cookie-parser')
// init express
var app = module.exports = express()

// server static files
app.use('/public', express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')

app.use('views', express.static(path.join(__dirname, 'views')))

// allow cross origin
app.use(cors());

// app.use(formidable());

// parse request bodies (req.body)
app.use(express.urlencoded({ extended: true }))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse applilcation/json
app.use(bodyParser.json());

app.use(cookieParse())

global.domain = '';

var port = process.env.PORT || 3001;

app.use((req, res, next) => {
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    domain = req.hostname;
    console.log(`https://${domain}`);
    next();
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

app.listen(port, () => console.log(`Example app listening at http://${port}`))
