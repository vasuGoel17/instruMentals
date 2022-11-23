const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const request = require("request");

const app = express();
app.use(express.static("Public"));
app.use(bodyParser.urlencoded({ extends: true }));

app.get("/logIn", function (req, res) {
  res.sendFile(__dirname + "/login.html");
});

app.post("/logIn", function (req, res) {
  let fName = req.body.firstName;
  let lName = req.body.lastName;
  let email = req.body.email;
  console.log(fName + " " + lName + " " + email);

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: fName,
          LNAME: lName,
        },
      },
    ],
  };

  const jsonData = JSON.stringify(data);

  url = "https://us18.api.mailchimp.com/3.0/lists/a55b18c653";
  option = {
    method: "POST",
    auth: "vasu:ae66d8517aabadff41f63b6ffd423e85-us18",
  };

  const request = https.request(url, option, function (response) {
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }

    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();
});

app.post("/failure", function (req, res) {
  res.redirect("/logIn");
});

// apiKey
// ae66d8517aabadff41f63b6ffd423e85-us18

// list id or audience id
// a55b18c653.
