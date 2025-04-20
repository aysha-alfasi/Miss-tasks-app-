const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Sentiment = require('sentiment');


const app = express();
const PORT = process.env.PORT || 5000;

// <♡  MiddleWare />
app.use(bodyParser.json()); 
app.use(cors());

// <♡  Initialize sentiment analysis />
const sentiment = new Sentiment();


// <♡  Start the server />
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

