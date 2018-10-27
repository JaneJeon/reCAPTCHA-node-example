const path = require("path"),
  request = require("request-promise")
require("hbs")

require("dotenv").config()
require("express")()
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")
  .use(require("body-parser").json())
  .get("/v2", (req, res) =>
    res.render("v2", { V2_PUBLIC: process.env.V2_PUBLIC })
  )
  .get("/v3", (req, res) =>
    res.render("v3", { V3_PUBLIC: process.env.V3_PUBLIC })
  )
  .post("/v2", async (req, res) => {
    const result = JSON.parse(
      await request
        .post("https://www.google.com/recaptcha/api/siteverify")
        .form({
          secret: process.env.V2_PRIVATE,
          response: req.body["g-recaptcha-response"],
          remoteip: req.ip
        })
    )

    res.send(result)
  })
  .post("/v3", async (req, res) => {
    const result = JSON.parse(
      await request
        .post("https://www.google.com/recaptcha/api/siteverify")
        .form({
          secret: process.env.V3_PRIVATE,
          response: req.body.token,
          remoteip: req.ip
        })
    )

    res.send(result)
  })
  .listen(3000, err => {
    if (err) console.error(err)
  })
