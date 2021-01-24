import { IUserDto } from '../Dto'
import Joi from 'joi'

const customError = () => {
  return new Error('Invalid password must be a number and one capital letter')
}

export const userValidation = (user: IUserDto) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    //  eslint-disable-next-line
    username: Joi.string().alphanum().min(5).max(12).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string()
      .min(8)
      .max(16)
      .pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)
      .error(customError)
      .required(),
  })
  return schema.validate(user)
}

export const loginValidation = (user: IUserDto) => {
  const schema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    //  eslint-disable-next-line
    password: Joi.string().alphanum().min(8).max(16).required(),
  })
  return schema.validate(user)
}
