let express = require("express");
// FROM HERE WE WILL DO SOMETHING FOR LOGING IN--
const bodyParser = require("body-parser");
const https = require("https");
const request = require("request");

const app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/feedback", function (req, res) {
  res.sendFile(__dirname + "/feedback.html");
});

app.get("/home", function (req, res) {
  res.sendFile(__dirname + "/home.html");
});

app.get("/yourBand", function (req, res) {
  res.sendFile(__dirname + "/yourBand.html");
});

app.get("/playlist", function (req, res) {
  res.sendFile(__dirname + "/playlist.html");
});

app.get("/aboutUs", function (req, res) {
  res.sendFile(__dirname + "/aboutUs.html");
});

app.get("/bestpick", function (req, res) {
  res.sendFile(__dirname + "/bbfy.html");
});

app.get("/bollywood", function (req, res) {
  res.sendFile(__dirname + "/bm.html");
});

app.get("/nineties", function (req, res) {
  res.sendFile(__dirname + "/oig.html");
});

app.get("/englishSongs", function (req, res) {
  res.sendFile(__dirname + "/es.html");
});

app.get("/arijit", function (req, res) {
  res.sendFile(__dirname + "/arijit.html");
});

app.get("/atif", function (req, res) {
  res.sendFile(__dirname + "/atif.html");
});

app.get("/ap", function (req, res) {
  res.sendFile(__dirname + "/dhillon.html");
});

app.get("/honey", function (req, res) {
  res.sendFile(__dirname + "/honey.html");
});

app.get("/aashiqui", function (req, res) {
  res.sendFile(__dirname + "/aashiqui.html");
});

app.get("/brahmastra", function (req, res) {
  res.sendFile(__dirname + "/brahmastra.html");
});

app.get("/shershah", function (req, res) {
  res.sendFile(__dirname + "/shershah.html");
});

app.get("/adhm", function (req, res) {
  res.sendFile(__dirname + "/adhm.html");
});

app.get("/workout", function (req, res) {
  res.sendFile(__dirname + "/workout.html");
});

app.get("/sleep", function (req, res) {
  res.sendFile(__dirname + "/sleep.html");
});

app.get("/travel", function (req, res) {
  res.sendFile(__dirname + "/travel.html");
});

app.get("/party", function (req, res) {
  res.sendFile(__dirname + "/party.html");
});

// app.get("/logIn", function (req, res) {
//   res.sendFile(__dirname + "/login.html");
// });

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  let fName = req.body.fName;
  let lName = req.body.lName;
  let email = req.body.email;

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
  res.redirect("/");
});

app.post("/success", function (req, res) {
  res.redirect("/home");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("server is running at local host 3000");
});

// apiKey
// ae66d8517aabadff41f63b6ffd423e85-us18

// list id or audience id
// a55b18c653.
