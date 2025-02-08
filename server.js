import mongoose from "mongoose";
import app from "./app.js";
import dotenv from "dotenv";
import TelegramBot from 'node-telegram-bot-api';

dotenv.config();

const { TG_TOKEN } = process.env;

const bot = new TelegramBot(TG_TOKEN, {polling: true});

bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id, "Вітаємо у EsPlace", {
        reply_markup: {
            inline_keyboard: [
               [ {text: 'Зробити замовлення', web_app: {url: 'https://esplace-web-app.onrender.com'}}]
            ]
        }
    })
});


const { DB_URL } = process.env;

async function run() {

    try {
        await mongoose.connect(DB_URL);

        app.listen(3030, () => {
            console.log("Server is running. Use our API on port: 3030");
        });

        console.info("Database connection successful");
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

}
run().catch(err => console.error(err))