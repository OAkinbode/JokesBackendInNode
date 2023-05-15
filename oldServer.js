// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//     res.setHeader("Content-Type", "text/plain");
//     res.write("hello, Sola. This is a thing");
//     res.end();

//     res.setHeader("Content-Type", "text/html");
//     res.write(`<p>hello, Sola. This is a thing<p>`);
//     res.write(`<p>I am testing this html to see what it will do<p>`);
//     res.end();

//   res.setHeader("Content-Type", "text/html");

//   fs.readFile("./views/index.html", (err, data) => {
//     if (err) {
//       console.log(err);
//       res.end();
//     } else {
//       //   res.write(data);
//       res.end(data);
//     }
//   });
// });

// server.listen(3000, "localhost", () => {
//   console.log("listening for requests on port 3000");
// });
