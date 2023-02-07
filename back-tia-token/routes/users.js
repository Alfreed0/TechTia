var express = require('express');
var router = express.Router();
const users_controller = require('../controllers/users.controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/token/:email', users_controller.getUserByEmail);
router.post('/create', users_controller.createUser);
router.get('/generarToken', users_controller.getTokenByEmail);
router.get('/usarToken', users_controller.getUserByToken);
router.post('/createUsedToken', users_controller.createUsedToken);

module.exports = router;
