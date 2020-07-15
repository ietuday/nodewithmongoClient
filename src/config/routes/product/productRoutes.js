const router = require("express").Router();

const productController = require("../../../controller/product/productController");

router.post('/add-product', productController.addProduct);
router.get('/get-all-product', productController.getAllProduct);
router.get('/get-product-by-id/:id', productController.getProductById);
router.put('/update-product-by-id/:id', productController.updateProductById);
router.delete('/delete-product-by-id/:id', productController.deleteProductById);

module.exports = router;