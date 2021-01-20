import { NextFunction, Request, RequestHandler, Response } from 'express'
import { Logger } from './Logger'

export const catchAsync = (handler: RequestHandler) => (
  req: Request,
  res: Response,
  next: NextFunction
) => handler(req, res, next).catch(next)

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: 'Not Found' })
}

export const internalServerError = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (!err.status) {
    console.log(err.stack)
  }
  res.status(err.status || 500).send(err.message || 'Internal Server Error')
  Logger.error(err)
  next(err)
}
