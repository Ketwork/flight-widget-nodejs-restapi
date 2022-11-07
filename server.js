const PORT = 8000
const axios = require("axios");
const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
app.use(cors())

app.get('/flights', (req, res) => {
  const options = {
    method: 'GET',
    url: 'http://api.aviationstack.com/v1/flights?access_key=' + process.env.API_KEY,
    headers: {
      'X-RapidAPI-Key': 'process.env.RAPID_API_KEY',
      'X-RapidAPI-Host': 'toronto-pearson-airport.p.rapidapi.com'
    }
  };
  axios.request(options).then(function (response) {
    // console.log(response.data);
    res.json(response.data.data.slice(0,4))
  }).catch(function (error) {
    console.error(error);
  });
})

app.listen(PORT, () => console.log('running on PORT ' + PORT))