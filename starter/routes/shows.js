var express = require("express");
var router = express.Router();

var showController = require('../controllers/show-controller')

router.get('/', showController.index)
router.get('/:id', showController.show)
router.post('/', showController.create)
router.put('/:id', showController.update)
router.delete('/:id', showController.destroy)

module.exports = router; 