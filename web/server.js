const express = require('express');
const app = express();
const port = 3000;

const api = require('./service/api');
app.use(api);

app.use('/', express.static('www'));

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})