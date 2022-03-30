var express = require('express');
var router = express.Router();
const axios = require('axios');
const { response } = require('express');
const API_key = 'c9e9fcaa3c3dc20fc38001043c133c5f';



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' }); // render {data:response.data}
});
router.get('/submit', function(req,res,next){
  const city = req.query.city;
  const url_api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`

  axios.get(url_api)
  .then(function (response){
    res.render('index', {data: response.data})
  })
  .catch(function (error){
    res.render(error)
  })
})

module.exports = router;
