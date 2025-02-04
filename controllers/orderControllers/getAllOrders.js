import HttpError from "../../helpers/HttpError.js";
import Order from "../../models/orderModel.js";

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        
        return res.status(200).send(orders);
    } catch (e) {
        return res.status(500).send({ message: HttpError(500, e.message).message });
    }
}

export default getAllOrders;