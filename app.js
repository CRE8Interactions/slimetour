const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const options = {
  key: fs.readFileSync('certs/slime.key'),
  cert: fs.readFileSync('certs/slimelifeshawtytour_com.chained.crt')
};

app.get('/', (req, res) => {
  res.send('Hello World!')
})

https.createServer(options, (req, res) => {
  res.send('hello world\n');
}).listen(port);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})