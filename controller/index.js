var express = require("express"),
    router = express.Router();
var ejs = require('ejs');
var nodemailer = require('nodemailer');
var path = require('path')
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;



router.post("/sendmail", async (req, res) => {
    var from = '';
    var to = [];
    var subject = '';
    var body_html = '';
    var response = {};
    var sender = "Developer Idblfs";
    var replyTo = "";
    var inReplyTo = "developer.idblfs@gmail.com";
    if (Object.keys(req.body).length > 0) {
        try {
            if (req.body.from) {
                from = req.body.from
            }
            if (req.body.to) {
                to = req.body.to
            }
            if (req.body.subject) {
                subject = req.body.subject
            }
            if (req.body.body_html) {
                body_html = req.body.body_html
            }
            const oauth2Client = await new OAuth2(
                "488348022368-an7viup4u2mrhdhi4885sjms98b8gvgt.apps.googleusercontent.com", // ClientID
                "H8FmLJAPOJKasOztLaxm_mT3", // Client Secret
                "https://developers.google.com/oauthplayground" // Redirect URL
            );
            oauth2Client.setCredentials({
                refresh_token: '1//04depwKoEeBmPCgYIARAAGAQSNwF-L9IrLJibDzTlo-1k1aJ8JevFRqEU_ZBkl5qv3XWKMWOuQ-fq6tZAGxgFnF1d9TKLry7Uid0'
            });
            const accessToken = oauth2Client.getAccessToken()

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
                    refreshToken: '1//04depwKoEeBmPCgYIARAAGAQSNwF-L9IrLJibDzTlo-1k1aJ8JevFRqEU_ZBkl5qv3XWKMWOuQ-fq6tZAGxgFnF1d9TKLry7Uid0',
                }
            });

            var mailOptions = {
                from: from,
                to: to,
                subject: subject,
                html: body_html,
                sender: sender,
                replyTo: to,
                inReplyTo: inReplyTo
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log('send mail error', error);
                    response = error;
                    res.send(response);
                }
                else {
                    console.log('Email sent: ' + info.response);
                    response = info;
                    res.send(response);
                }
            });
        } catch (error) {
            console.log('catch', error);
            response = error;
            res.send(response);
        }
    }
})


module.exports = router;

