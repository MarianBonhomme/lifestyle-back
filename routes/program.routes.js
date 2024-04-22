const express = require('express');
const programController = require('../controllers/program.controller');

const router = express.Router();

router.get('/:profileId', programController.getAll);
router.put('/:id', programController.updateOneById);
router.post('/', programController.addOne);

module.exports = router;