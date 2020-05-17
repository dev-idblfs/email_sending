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
            const oauth2Client = new OAuth2(
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
                replyTo: from,
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
    } else {
        res.send('we dont get any informations');
    }
})

router.get("/", async (req, res) => {
    var from = '';
    var to = [];
    var subject = '';
    var body_html = '';
    var response = {};
    var sender = "Developer Idblfs";
    var replyTo = "";
    var inReplyTo = "developer.idblfs@gmail.com";
    try {
        // if (req.body.from) {
        //     from = req.body.from
        // }
        // if (req.body.to) {
        //     to = req.body.to
        // }
        // if (req.body.subject) {
        //     subject = req.body.subject
        // }
        // if (req.body.body_html) {
        //     body_html = req.body.body_html
        // }

        var transporter = nodemailer.createTransport({
            service: 'Godaddy',
            secureConnection: false,
            auth: {
                user: "info@onxcy.com",
                pass: "GoalWebsite@2020."
            }
            //             Server Name:smtpout.secureserver.net
            // Port:465
            // User Name:info@onxcy.com
            // Connection:SSL/TLS

        });

        var mailOptions = {
            from: 'developer.idblfs@gmail.com',
            to: 'anshudivvy@gmail.com',
            subject: 'subject',
            html: '<h1>body_html</h1>',
            sender: "anshu <anshudivvy@gmail.com>",
            replyTo: 'ansh <anshudivvy@gmail.com>',
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

})
module.exports = router;

