import mongoose from "mongoose";
import HttpError from "../../helpers/HttpError.js";
import Product from "../../models/productModel.js";

const getProduct = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).send({ message: HttpError(404).message });
  }

  try {
    const product = await Product.findOne({
      _id: req.params.id,
    });

    if (product === null) {
      return res.status(404).send({ message: HttpError(404).message });
    }

    return res.status(200).send({ product });
  } catch (e) {
    return res.status(500).send({ message: HttpError(500, e.message).message });
  }
};

export default getProduct;
