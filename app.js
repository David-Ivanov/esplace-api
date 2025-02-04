import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

import productRouter from "./routes/productRouter.js";
import orderRouter from "./routes/orderRouter.js";


const app = express();

dotenv.config();
const { CLOUDINARY_KEY, CLOUDINARY_SECRET, CLOUDINARY_NAME } = process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_KEY,
  api_secret: CLOUDINARY_SECRET,
});

app.use(morgan("tiny"));
app.use(cors());

app.use("/api/product", productRouter);
app.use("/api/order", orderRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

export default app;
