import HttpError from "../../helpers/HttpError.js";
import Product from "../../models/productModel.js";
import { createProductSchema } from "../../schemas/productSchema.js";

const createProduct = async (req, res) => {
    const { title, price, isAvailable, description, gram, tag, image } = req.body;
    const { error, value } = createProductSchema.validate({title, price, gram});

    if (error) {
        return res.status(400).send({ message: error.message });
    }

    try {
        const product = await Product.create({
            title: value.title,
            price: value.price,
            isAvailable,
            gram: value.gram,
            tag,
            image,
            description
        });

        return res.status(201).send({ product });
    } catch (error) {
        return res.status(500).send({message: HttpError(500, error.message).message })
    }
}

export default createProduct;