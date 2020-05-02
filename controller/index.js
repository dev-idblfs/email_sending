var express = require("express"),
    router = express.Router();
var ejs = require('ejs');
var nodemailer = require('nodemailer');
var path = require('path')
const fs = require('fs');

router.get("/", function (req, res) {
    var response = {};
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        service: 'gmail',
        port: 465,
        secure: true,
        auth: {
            type: 'oauth2',
            user: 'developer.idblfs@gmail.com',
            clientId: '488348022368-38ctso9p62pm7q1399auhg7lsl188ek9.apps.googleusercontent.com',
            clientSecret: 'lY17MO6IItex0tgEP22WAYYK',
            refreshToken: '1//04qxnRE04tFQnCgYIARAAGAQSNwF-L9Ircda2XPTt9W2nut9DSRjn_fGRLGdXYhBNmqI9zxyKhzkQvgPrXvffVlTAiSBkCgxneMg',
        }
    });

    var mailOptions = {
        from: 'mr.divyanshu96@gmail.com',
        to: 'mr.divyanshu96@gmail.com',
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