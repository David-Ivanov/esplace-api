import mongoose from "mongoose";
import HttpError from "../../helpers/HttpError.js";
import Order from "../../models/orderModel.js";

const getOrder = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).send({ message: HttpError(404).message });
  }

  try {
    const order = await Order.findOne({
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

export default getOrder;
