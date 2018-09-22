const path = require("path"),
  request = require("request-promise")

require("dotenv").config()
require("express")()
  .use(require("body-parser").json())
  .get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")))
  .post("/", async (req, res) => {
    const result = JSON.parse(
      await request
        .post("https://www.google.com/recaptcha/api/siteverify")
        .form({
          secret: process.env.CAPTCHA_SECRET,
          response: req.body["g-recaptcha-response"]
        })
    )

    result.success ? res.send(result) : res.sendStatus(403)
  })
  .listen(3000, err => {
    if (err) console.error(err)
  })
