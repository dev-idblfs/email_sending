var express = require("express"),
  router = express.Router();
var nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const gmail = (mailOptions) => {
  return new Promise((resolve, reject) => {
    const oauth2Client = new OAuth2(
      "488348022368-an7viup4u2mrhdhi4885sjms98b8gvgt.apps.googleusercontent.com", // ClientID
      "H8FmLJAPOJKasOztLaxm_mT3", // Client Secret
      "https://developers.google.com/oauthplayground" // Redirect URL
    );

    oauth2Client.setCredentials({
      refresh_token:
        "1//04Q4q690Kb7rICgYIARAAGAQSNwF-L9Ir-_wvbn6JDNrry6ieIrdrBRs3FAGGyU_0KV4N8fQkn77Y5FrW5U1oBH7vaUtT-7CZzjo",
    });

    const smtpTransport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "mail.onxcy@gmail.com",
        clientId:
          "488348022368-an7viup4u2mrhdhi4885sjms98b8gvgt.apps.googleusercontent.com",
        clientSecret: "H8FmLJAPOJKasOztLaxm_mT3",
        refreshToken:
          "1//04Q4q690Kb7rICgYIARAAGAQSNwF-L9Ir-_wvbn6JDNrry6ieIrdrBRs3FAGGyU_0KV4N8fQkn77Y5FrW5U1oBH7vaUtT-7CZzjo",
        accessToken:
          "ya29.a0AfH6SMCYiRYxzwODaWtCB_FFHRuR3wZ7yzglp9kBMKMqwsAJIYcdhuC3fFxT5YWR1en9yI2RRKtpEtaWfnUcZU2mbZLtsDztHgL5iPvCu4bgu0h9OtA5MNifrpTFYgI9UCU2Bx1NDFLEWTTXkJsvtVOr3VEdQxLZ9d4",
      },
    });

    smtpTransport.sendMail(mailOptions, (error, info) => {
      smtpTransport.close();
      if (error) {
        console.log("send mail error", error);
        return reject({ status: 500, body: error });
      } else if (info.responseCode && info.responseCode == 550) {
        console.log("Email Quata: " + info.response);
        return resolve({ status: 550, body: info });
      } else {
        console.log("Email sent: " + info.response);
        return resolve({ status: 200, body: info });
      }
    });
  });
};

const info = (mailOptions) => {
  return new Promise((resolve, reject) => {
    const smtpTransport = nodemailer.createTransport({
      service: "Godaddy",
      secureConnection: true,
      auth: {
        user: "info@onxcy.com",
        pass: "GoalWebsite@2020.",
      },
    });

    smtpTransport.sendMail(mailOptions, (error, info) => {
      smtpTransport.close();
      if (error) {
        console.log("send mail error", error);
        return reject({ status: 500, body: error });
      } else if (info.responseCode && info.responseCode == 550) {
        console.log("Email Quata: " + info.response);
        return resolve({ status: 550, body: info });
      } else {
        console.log("Email sent: " + info.response);
        return resolve({ status: 200, body: info });
      }
    });
  });
};

const hr = (mailOptions) => {
  return new Promise((resolve, reject) => {
    const smtpTransport = nodemailer.createTransport({
      service: "Godaddy",
      secureConnection: true,
      auth: {
        user: "hr@onxcy.com",
        pass: "GoalWebsite@2020.",
      },
    });

    smtpTransport.sendMail(mailOptions, (error, info) => {
      smtpTransport.close();
      if (error) {
        console.log("send mail error", error);
        return reject({ status: 500, body: error });
      } else if (info.responseCode && info.responseCode == 550) {
        console.log("Email Quata: " + info.response);
        return resolve({ status: 550, body: info });
      } else {
        console.log("Email sent: " + info.response);
        return resolve({ status: 200, body: info });
      }
    });
  });
};

router.post("/sendmail", async (req, res) => {
  var from = "";
  var to = [];
  var subject = "";
  var body_html = "";
  var response = {};
  var sender = "Onxcy HR <hr@onxcy.com>";
  var replyTo = "Onxcy HR <hr@onxcy.com>";
  var inReplyTo = "Onxcy HR <hr@onxcy.com>";
  if (Object.keys(req.body).length > 0) {
    try {
      if (req.body.from) {
        from = req.body.from;
      }
      if (req.body.to) {
        to = req.body.to;
      }
      if (req.body.subject) {
        subject = req.body.subject;
      }
      if (req.body.body_html) {
        body_html = req.body.body_html;
      }

      var mailOptions = {
        from: from,
        to: to,
        subject: subject,
        html: body_html,
        sender: sender,
        replyTo: from,
        inReplyTo: inReplyTo,
      };

      var result = {};
      result = await info(mailOptions);
      if (result.status == 550) {
        result = {};
        result = await hr(mailOptions);
        if (result.status == 550) {
          result = {};
          result = await gmail(mailOptions);
        }
      }
      console.log("MAIL SENT", result);
      res.json(result);
    } catch (error) {
      console.log("catch", error);
      response = error;
      res.json(response);
    }
  } else {
    res.send("we dont get any informations");
  }
});

router.get("/", async (req, res) => {
  var from = "Onxcy HR <hr@onxcy.com>";
  var to = ["anshudivvy@gmail.com"];
  var subject = "";
  var body_html = "hellos";
  var response = {};
  var sender = "Onxcy HR <hr@onxcy.com>";
  var replyTo = "Onxcy HR <hr@onxcy.com>";
  var inReplyTo = "Onxcy HR <hr@onxcy.com>";
  try {
    var mailOptions = {
      from: from,
      to: to,
      subject: subject,
      html: body_html,
      sender: sender,
      replyTo: from,
      inReplyTo: inReplyTo,
    };

    var result = {};
    result = await info(mailOptions);
    if (result.status == 550) {
      result = {};
      result = await hr(mailOptions);
      if (result.status == 550) {
        result = {};
        result = await gmail(mailOptions);
      }
    }
    console.log("MAIL SENT", result);
    res.json(result);
  } catch (error) {
    console.log("catch", error);
    response = error;
    res.json(response);
  }
});

module.exports = router;
