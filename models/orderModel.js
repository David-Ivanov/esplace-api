import { Schema, model } from "mongoose";

const order = new Schema({
    name: {
        type: String,
        require: ['true', 'Імʼя обовʼязкова']
    },
    address: {
        type: String,
        require: ['true', 'Адреса обовʼязкова']
    },
    number: {
        type: String,
        require: ['true', 'Номер обовʼязковий']
    },
    comment: {
        type: String,
        default: null,
        require: false
    },
    products: [{
        productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        require: [true, 'Товари обовʼязкові']
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
        default: 1
      }
    }]
},
{ 
    versionKey: false,
    timestamps: {
        createdAt: true,
        updatedAt: false
    }
 }
);

const Order = model('order', order);

export default Order;