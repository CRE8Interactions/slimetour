const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const fs = require('fs')
const https = require('https')

const options = {
  key: fs.readFileSync('certs/slime.key'),
  cert: fs.readFileSync('certs/slimelifeshawtytour_com.chained.crt')
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

https.createServer(options, app).listen(port, () => {
  console.log(`App running on port: ${port}`)
});
