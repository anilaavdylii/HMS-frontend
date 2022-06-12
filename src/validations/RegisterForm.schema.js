import Joi from 'joi';

export const RegisterFormSchema = Joi.object({
  name: Joi.string().required().label('Name'),
  surname: Joi.string().required().label('Surname'),
  email: Joi.string().email({ tlds: false }).required().label('Email'),
  password: Joi.string().min(4).max(10).required().label('Password'),
});
