var express = require("express"),
    router = express.Router();
var ejs = require('ejs');
var nodemailer = require('nodemailer');
var path = require('path')
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

router.get("/", function (req, res) {
    const oauth2Client = new OAuth2(
        "488348022368-an7viup4u2mrhdhi4885sjms98b8gvgt.apps.googleusercontent.com", // ClientID
        "H8FmLJAPOJKasOztLaxm_mT3", // Client Secret
        "https://developers.google.com/oauthplayground" // Redirect URL
    );

    oauth2Client.setCredentials({
        refresh_token: "Your Refresh Token Here"
    });
    const accessToken = oauth2Client.getAccessToken()

    var response = {};
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        service: 'gmail',
        port: 465,
        secure: true,
        auth: {
            type: 'oauth2',
            user: 'developer.idblfs@gmail.com',
            clientId: '488348022368-an7viup4u2mrhdhi4885sjms98b8gvgt.apps.googleusercontent.com',
            clientSecret: 'H8FmLJAPOJKasOztLaxm_mT3',
            refreshToken: accessToken,
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