import mongoose from "mongoose";
import HttpError from "../../helpers/HttpError.js";
import Order from "../../models/orderModel.js";
import { createOrderSchema } from "../../schemas/orderSchema.js";

const { ObjectId } = mongoose.Types;

const createOrder = async (req, res) => {
    const { name, address, number, comment } = req.body;
    let { products } = req.body;

    
    const updatedProducts = products.map(item => {
        if (!ObjectId.isValid(item.productId)) {
          return res.status(500).send({message: HttpError(400, `${item.productId} is not a valid ObjectId`).message });
        }
  
        return {
          productId: new ObjectId(item.productId),
          quantity: item.quantity
        };
      });
    
    const { error, value } = createOrderSchema.validate({name, address, number, comment});
    
    if (error) {
        return res.status(400).send({ message: error.message });
    }

    try {
        const order = await Order.create({
            ...value,
            products: updatedProducts
        });

        return res.status(201).send({ order });
    } catch (error) {
        return res.status(500).send({message: HttpError(500, error.message).message })
    }
}

export default createOrder;