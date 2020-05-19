const express = require('express');
const app = express();
const path = require('path');
const index = require('./routes/index');

const ROOT_PATH = process.cwd();
const publicDirectoryPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicDirectoryPath));

app.set('views', path.join(ROOT_PATH, '/views/templates'));
app.set('view engine', 'pug');

app.use('/', index);

app.listen(port, () => {
    console.log('Port is listening at ' + port);
})