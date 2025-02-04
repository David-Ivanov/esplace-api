import HttpError from "../../helpers/HttpError.js";
import Product from "../../models/productModel.js";
import { updateProductSchema } from "../../schemas/productSchema.js";

const updateProduct = async (req, res) => {
  
  const { error, value } = updateProductSchema.validate(req.body);

  // перевірка помилок валідації + корректності переданого ІД
  if (error) {
    return res.status(400).send({ message: error.message });
  }

  try {
    const product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      value,
      { new: true }
    );
    

    if (product === null) {
      return res.status(404).send({ message: HttpError(404).message });
    }

    return res.status(200).send({ product });
  } catch (e) {
    return res.status(500).send({ message: HttpError(500, e.message).message });
  }
};

export default updateProduct;
