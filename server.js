const express = require('express');
const app = express();
const server = require('./config/server-config');
const routes = require('./route/route');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./config/dbConfig');
console.log(server);

app.use('/', routes);
app.listen(server, () => console.log('Server started at ', server));
