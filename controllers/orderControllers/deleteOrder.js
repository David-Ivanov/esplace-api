import HttpError from "../../helpers/HttpError.js";
import Order from "../../models/orderModel.js";


const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findOneAndDelete({
      _id: req.params.id,
    });

    if (order === null) {
      return res.status(404).send({ message: HttpError(404).message });
    }

    return res.status(200).send({ order });
  } catch (e) {
    return res.status(500).send({ message: HttpError(500, e.message).message });
  }
};

export default deleteOrder;
