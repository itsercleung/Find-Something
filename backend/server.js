var cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const request = require("request");

require("dotenv").config();

//-------------------------------------------------------------------------------------//
//------------------------------- SERVER SETUP ----------------------------------------//
//-------------------------------------------------------------------------------------//

//Setting up API key for GIPHY
const GIPHY_API_KEY = process.env.GIPHY_API_KEY;
const OFFSET_VALUE = 24;

//Setting up router parameters
const API_PORT = 3001;
const app = express();
app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}))
const router = express.Router();

//Use bodyparser (into readable json format) - for TESTING
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(logger('dev'));

// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));

//-------------------------------------------------------------------------------------//
//------------------------------- CRUD FUNCTIONS --------------------------------------//
//-------------------------------------------------------------------------------------//

//@GET - get giphy results given search string
router.post("/searchResults", (req, res) => {
    const {
        limit,
        lang,
        q
    } = req.body;

    request({
            uri: 'https://api.giphy.com/v1/gifs/search',
            qs: {
                api_key: GIPHY_API_KEY,
                q: q,
                limit: limit,
                offset: getRandomInt(OFFSET_VALUE),
                rating: "PG-13",
                lang: lang,
            }
        },
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                res.json(JSON.parse(body).data);
            } else {
                res.json(error);
            }
        });

});

//-------------------------------------------------------------------------------------//
//------------------------------- SERVER HELPER FUNCTIONS -----------------------------//
//-------------------------------------------------------------------------------------//
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}