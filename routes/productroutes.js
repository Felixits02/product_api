import express from "express";
import { createProduct, deleteProduct, getAllProducts, getSingleProduct, updateProduct } from '../controller/productController.js';


import upload from "../middleware/multer.js"

const router = express.Router();

router.post("/product",upload.single("image"),createProduct);
router.get("/product",getAllProducts);
router.get("/product/:id",getSingleProduct);
router.put("/product/:id",upload.single("image"),updateProduct);
router.delete("/product/:id",deleteProduct);

export default router;