var express = require('express');
var router = express.Router();
const users_controller = require('../controllers/users.controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/token/:email', users_controller.getUserByEmail);
router.post('/create', users_controller.createUser);

module.exports = router;
