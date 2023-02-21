// const http = require("http");
// const fs = require("fs");

// http
//   .createServer(function (req, resp) {
//     console.log(req.url);
//     console.log(req.method);
//     console.log(req.headers["user-agent"]);
//     resp.setHeader("Content-Type", "text/html;cherset='utf-8;");

//     if (req.url === "/") {
//       resp.end("Main <b>Hello</b>");
//     } else if (req.url === "/cat") {
//       resp.end("Category <h2>Hello</h2>");
//     } else if (req.url === "/dat") {
//       const data = fs.readFileSync("1.dat");
//       console.log(data);
//       resp.end(data);
//     }
//   })
//   .listen(3008);
let debug = require("debug")("app.js");
const express = require("express");
const app = express();
app.use(express.static("public"));

app.listen(3003, () => {
  console.log("node express work on 3004");
});

app.get("/", function (req, resp) {
  console.log("load /");
  resp.render("index.html");
});

app.get("/cat", function (req, resp) {
  resp.end("Hello i am cat");
});
