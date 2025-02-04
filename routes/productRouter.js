import express from "express";
import createProduct from "../controllers/productControllers/createProduct.js";
import getAllProducts from "../controllers/productControllers/getAllProducts.js";
import getProduct from "../controllers/productControllers/getProduct.js";
import updateProduct from "../controllers/productControllers/updateProduct.js";
import deleteProduct from "../controllers/productControllers/deleteProduct.js";


const productRouter = express.Router();

const jsonParse = express.json();

productRouter.post("/", jsonParse, createProduct);
productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProduct);
productRouter.put("/:id", jsonParse, updateProduct);
productRouter.delete('/:id', deleteProduct);

export default productRouter;