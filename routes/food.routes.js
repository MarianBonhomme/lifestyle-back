const express = require('express');
const foodController = require('../controllers/food.controller');

const router = express.Router();

const upload = require('../configs/multer.config');

router.get('/', foodController.getAll);
router.get('/totalQuantity', foodController.getAllWithTotalQuantity);
router.get('/:id', foodController.getOneById);
router.post('/', upload.single('image'), foodController.addOne);
router.put('/:id', upload.single('image'), foodController.updateOneById);
router.delete('/:id', foodController.deleteOneById);

module.exports = router;