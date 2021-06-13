//= npm imports
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// other imports
const router = require('./app/router');

const PORT = process.env.PORT || 3000;
const app = express();

const expressSwagger = require('express-swagger-generator')(app);

// we allow cross origin requests
app.use(cors());

// we user the json middleware to tell the data we'll get from the client is in JSON
// so that express can parse the request.body/query accordingly
app.use(express.json());

// we use ask the server to use the router we prepared
app.use('/api', router);

let options = {
    swaggerDefinition: {
        info: {
            description: 'Argonaut REST API',
            title: 'argonaut',
            version: '1.0.0',
        },
        host: `wild-argonaut-vde-guil.herokuapp.com`,
        basePath: '/api',
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['https']
    },
    basedir: __dirname, //app absolute path
    files: [
        './app/router.js',
        './app/models/*.js'
    ] //Path to the API handle folder
};

// Usage of express swagger
expressSwagger(options);

// we send a 404 response for every route not defined in our router
app.use((_, res) => {
    res.status(404).json("Not Found");
})

//we start listening to request from clients
app.listen(PORT, () => {
    console.log('listening to http://localhost:' + PORT);
});