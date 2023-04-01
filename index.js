const http = require("http");

const sever = http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.write(
        JSON.stringify({
          message:
            " Nodejs is a JavaScript runtime built on Chromes V8 JavaScript engine1 It allows you to run JavaScript on the serverside",
        })
      );
      res.end();
    } else if (req.url === "/about") {
      res.write("The About page");
      res.end();
    } else if (req.url === "/contact") {
      res.write("The Contact page");
      res.end();
    }
  })
  .listen(3009);