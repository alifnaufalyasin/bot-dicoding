const bodyParser = require('body-parser');
const express = require('express');
const { bottender } = require('bottender');
const { tambahTask } = require("./src/module/tambahTaskbahTask")

const app = bottender({
  dev: process.env.NODE_ENV !== 'production',
});

const port = Number(process.env.PORT) || 5000;

// the request handler of the bottender app
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(
    bodyParser.json({
      verify: (req, _, buf) => {
        req.rawBody = buf.toString();
      },
    })
  );

  // your custom route
  server.use('/liff', express.static("liff"));
  server.post("/tambahTask", tambahTask);

  // route for webhook request
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});