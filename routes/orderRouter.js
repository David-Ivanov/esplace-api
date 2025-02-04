import express from "express";
import createOrder from "../controllers/orderControllers/createOrder.js";
import deleteOrder from "../controllers/orderControllers/deleteOrder.js";
import getAllOrders from "../controllers/orderControllers/getAllOrders.js";
import getOrder from "../controllers/orderControllers/getOrder.js";


const orderRouter = express.Router();

const jsonParse = express.json();

orderRouter.post("/", jsonParse, createOrder);
orderRouter.get("/", getAllOrders);
orderRouter.get("/:id", getOrder);
orderRouter.delete('/:id', deleteOrder);

export default orderRouter;