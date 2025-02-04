import Joi from "joi";

const objectIdPattern = /^[0-9a-fA-F]{24}$/;

export const createOrderSchema = Joi.object({
    name: Joi.string().min(1).max(60).required().trim().messages({
      "any.required": "Імʼя обовʼязкове",
      "string.base": "Імʼя має бути строкою",
      "string.min": "Мінимальна длина імʼя 1 символ",
      "string.max": "Максимальна длина імʼя 60 символів"
    }),
    address: Joi.string().min(10).max(150).required().trim().messages({
        "any.required": "Адреса обовʼязкове",
        "string.base": "Адреса має бути строкою",
        "string.min": "Мінимальна длина адреси 10 символ",
        "string.max": "Максимальна длина адреси 150 символів"
    }),
    number: Joi.string().length(13).required().trim().messages({
        "any.required": "Номер обовʼязковий",
        "string.length": "Длина номеру має бути 13 символів"
    }),
    comment: Joi.string().min(1).max(50).trim().messages({
      "string.base": "Коммнтар має бути строкою"
    })
  });