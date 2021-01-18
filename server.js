'use strict';

// Load environment variables from the .env file
require('dotenv').config();

// application dependancies
const express = require('express');
const cors = require('cors');

// application setup
const PORT = process.env.PORT;
const app = express();
app.use(cors());

app.get('/location', (request, response) => {
  console.log("Hello console!")
  response.send('Hello world!');
});

// make sure the server is listening for requests
app.listen(PORT, () => console.log(`App is listening on ${PORT}`));