import Joi from 'joi';

export const LoginFormSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).required().label('Name'),
  password: Joi.string().min(4).max(10).required().label('Password'),
});
