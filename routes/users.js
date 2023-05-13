var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/all', (req,res) => {
  res.send('recupero usuarios')
})

router.post('/new', (req,res) => {
  res.send('se crea nuevo usuario')
})

router.delete('/borrado', (req,res) => {
  res.send('se borra usuario')
})


module.exports = router;
