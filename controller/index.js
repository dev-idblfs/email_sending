var express = require("express"),
    router = express.Router();
var ejs = require('ejs');
var nodemailer = require('nodemailer');
var path = require('path')
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

router.get("/", async (req, res) => {
    var response = {};
    try {
        const oauth2Client = new OAuth2(
            "488348022368-an7viup4u2mrhdhi4885sjms98b8gvgt.apps.googleusercontent.com", // ClientID
            "H8FmLJAPOJKasOztLaxm_mT3", // Client Secret
            "https://developers.google.com/oauthplayground" // Redirect URL
        );


        oauth2Client.setCredentials({
            refresh_token: '1//04depwKoEeBmPCgYIARAAGAQSNwF-L9IrLJibDzTlo-1k1aJ8JevFRqEU_ZBkl5qv3XWKMWOuQ-fq6tZAGxgFnF1d9TKLry7Uid0'
        });

        const accessToken = await oauth2Client.getAccessToken()

        var transporter = await nodemailer.createTransport({
            host: 'smtp.gmail.com',
            service: 'gmail',
            port: 465,
            secure: true,
            auth: {
                type: 'oauth2',
                user: 'developer.idblfs@gmail.com',
                clientId: '488348022368-an7viup4u2mrhdhi4885sjms98b8gvgt.apps.googleusercontent.com',
                clientSecret: 'H8FmLJAPOJKasOztLaxm_mT3',
                refreshToken: '1//04depwKoEeBmPCgYIARAAGAQSNwF-L9IrLJibDzTlo-1k1aJ8JevFRqEU_ZBkl5qv3XWKMWOuQ-fq6tZAGxgFnF1d9TKLry7Uid0',
            }
        });

        var mailOptions = {
            from: 'mr.divyanshu96@gmail.com',
            to: 'mr.divyanshu96@gmail.com',
            subject: 'Sending Email using Node.js',
            html: '<h1>That was easy!<h1>'
        };

        await transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log('send mail error', error);
                response = error
            } else {
                console.log('Email sent: ' + info.response);
                response = info
            }
        });
    } catch (error) {
        console.log('catch', error);
        response = error;
    }

    res.send(response);
})


module.exports = router;