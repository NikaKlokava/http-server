const http = require("http");

const html = `
<!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <title>Basic node js</title>
                <link rel="stylesheet" href="app.css">
            </head>

            <body>
                <h1> Basic node js!</h1>
                <button> Click me </button>

                <script src="app.js"></script>
            </body>
        </html>
`;
const css = `
body {
    margin: 0px;
    padding: 0px;
    text-align: center;
}
h1 {
    background-color: #43853d;
    color: white;
    padding: .5em;
    font-family: 'Consolas';
}
`;
const icon = "icon";
const js = `
const button = document.querySelector('button');
button.addEventListener('click', event => alert('Node.js is working!'))
`;

http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
        res.writeHead(200, { "Content-type": "text/html" });
        res.end(html);
        break;
      case "/app.css":
        res.writeHead(200, { "Content-type": "text/css" });
        res.end(css);
        break;
      case "/app.js":
        res.writeHead(200, { "Content-type": "text/js" });
        res.end(js);
        break;
      default:
        res.writeHead(404, { "Content-type": "text/plain" });
        res.end("404: Not found");
    }
  })
  .listen(3000, () => console.log("server is working"));
