import HttpError from "../../helpers/HttpError.js";
import Product from "../../models/productModel.js";

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        
        return res.status(200).send(products);
    } catch (e) {
        return res.status(500).send({ message: HttpError(500, e.message).message });
    }
}

export default getAllProducts;