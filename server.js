import mongoose from "mongoose";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const { DB_URL } = process.env;

async function run() {
    try {
      await mongoose.connect(DB_URL);
      console.info("Database connection successful");
  
      app.listen(3030, async () => {
        console.log("Server is running. Use our API on port: 3030");
      });
    } catch (err) {
      console.error("Ошибка подключения:", err);
      process.exit(1);
    }
  }
  
  run().catch((err) => console.error("Ошибка запуска:", err));