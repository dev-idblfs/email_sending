var express = require("express"),
    router = express.Router();
var nodemailer = require('nodemailer');


router.post("/sendmail", async (req, res) => {
    var from = '';
    var to = [];
    var subject = '';
    var body_html = '';
    var response = {};
    var sender = "Onxcy HR <hr@onxcy.com>";
    var replyTo = "Onxcy HR <hr@onxcy.com>";
    var inReplyTo = "Onxcy HR <hr@onxcy.com>";
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
            
            var transporter = nodemailer.createTransport({
                service: 'Godaddy',
                secureConnection: true,
                auth: {
                    user: "info@onxcy.com",
                    pass: "GoalWebsite@2020."
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
});

module.exports = router;

