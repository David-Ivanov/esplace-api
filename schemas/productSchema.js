import Joi from "joi";

export const createProductSchema = Joi.object({
    title: Joi.string().min(1).required().trim().messages({
      "any.required": "Назва обовʼязкова",
      "string.base": "Назва має бути строкою",
      "string.min": "Мінимальна длина назви 1 символ"
    }),
    price: Joi.number().required().messages({
        "any.required": "Ціна обовʼязкова"
    }),
    gram: Joi.number().required().messages({
        "any.required": "Грамовка обовʼязкова"
    }),
    description: Joi.string().min(1).max(50).trim().messages({
      "string.base": "Опис має бути строкою"
    }),
  });

  export const updateProductSchema = Joi.object({
    title: Joi.string().min(1).max(50).trim().messages({
      "string.base": "Назва має бути строкою",
      "string.min": "Мінимальна длина назви 1 символ"
    }),
    description: Joi.string().min(1).max(50).trim().messages({
      "string.base": "Опис має бути строкою",
      "string.min": "Мінимальна длина назви 1 символ"
    }),
  });