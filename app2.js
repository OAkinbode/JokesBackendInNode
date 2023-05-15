// const express = require("express");
// const app = express();
// const fs = require("fs");

// // register view engine
// // This tells the app to look into the views folder to find the ejs files.
// app.set("view engine", "ejs");

// const getFile = function (path, res) {
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       console.log(err);
//       res.end();
//     } else {
//       res.send(data.toString());
//     }
//   });
// };

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

// app.get("/", (req, res) => {
//   let path = "./views/index.html";
//   getFile(path, res);
// });

// app.get("/about", (req, res) => {
//   //This is another way to do it.
//   res.sendFile("./views/about.html", { root: __dirname });
// });

// app.get("/aboutme", (req, res) => {
//   res.redirect("/about");
// });

// app.get("*", (req, res) => {
//   let path = "./views/404.html";
//   getFile(path, res);
// });

// this is another way to do the 404 response. Express reaches this point and fires this function if nobody else picks it
// up from above.
// app.use((req, res) => {
//   res.status(404).sendFile("./views/404.html", { root: __dirname });
// });
