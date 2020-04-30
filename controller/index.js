var express = require("express"),
    router = express.Router();
var ejs = require('ejs');
var nodemailer = require('nodemailer');
var path = require('path')
const fs = require('fs');

router.get("/", async function (req, res) {
    var response = {};
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'youremail@gmail.com',
            pass: 'yourpassword'
        }
    });

    var mailOptions = {
        from: 'youremail@gmail.com',
        to: 'myfriend@yahoo.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            response = error
        } else {
            console.log('Email sent: ' + info.response);
            response = info
        }
    });

    res.send(response);
})


module.exports = router;