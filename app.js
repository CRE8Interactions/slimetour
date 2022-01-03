const express = require('express')
const app = express()
const host = 'localhost'
const port = process.env.PORT || 8080
const fs = require('fs')
const https = require('https')
const http = require('http')

const options = {
  key: fs.readFileSync('certs/slime.key'),
  cert: fs.readFileSync('certs/slimelifeshawtytour_com.chained.crt')
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("Coming Soon");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

// https.createServer(options, app).listen(port, () => {
//   console.log(`App running on port: ${port}`)
// });
