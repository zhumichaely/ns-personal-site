const express = require("express");
const session = require("express-session");
const crypto = require("crypto");

const port = process.env.PORT || 3000;
const app = express();

app.use(
  session({
    secret: crypto.randomBytes(64).toString("hex"),
    resave: true,
    saveUninitialized: false,
  })
);

app.use(express.static("public", { maxage: "1y" }));

app.get("/", (req, res) => {
  if (req.session.visited) {
    res.sendFile(`${__dirname}/index-revisit.html`);
  } else {
    req.session.visited = true;
    res.sendFile(`${__dirname}/index.html`);
  }
});

app.listen(port, () => {
  console.log(`listening ${port}`);
});
