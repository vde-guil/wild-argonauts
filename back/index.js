//= npm imports
require('dotenv').config();
const express = require('express');

// other imports
const router = require('./app/router');


const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use('/api', router);

app.listen(PORT, () => {
    console.log('listen to http://localhost:' + PORT);
});