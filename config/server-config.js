const path = require('path');
require('dotenv').config({
   path: path.join(__dirname, '../.env')
});

const port = process.env.PORT || 3500;

module.exports = port;
