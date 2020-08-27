var express = require('express');
var router = express.Router();
const pizzasRouter = require('../controllers/api/pizzas')

router.get('/pizzas', pizzasRouter.index)
router.get('/pizzas/:id', pizzasRouter.show)
router.post('/pizzas', pizzasRouter.create)
router.put('/pizzas/:id', pizzasRouter.update)
router.delete('/pizzas/:id', pizzasRouter.delete)

module.exports = router;
