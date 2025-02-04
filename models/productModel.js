import { Schema, model } from "mongoose";

const product = new Schema({
    title: {
        type: String,
        require: ['true', 'Назва обовʼязкова']
    },
    price: {
        type: Number,
        require: ['true', 'Ціна обовʼязкова']
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    description: {
        type: String,
        default: null
    },
    gram: {
        type: Number,
        require: [true, 'Грамовка обовʼязкова']
    },
    tag: {
        type: String,
        require: true,
        default: 'coffee',
        enum: {
            values: ['coffee', 'dessert', 'food'],
            message: '{VALUE} не є доступним значенням'
        }
    },
    image: {
        type: String,
        default: 'https://res.cloudinary.com/da7at2lhf/image/upload/v1737656435/default.png'
    }
},
{ 
    versionKey: false,
    timestamps: false
 }
);

const Product = model('product', product);

export default Product;