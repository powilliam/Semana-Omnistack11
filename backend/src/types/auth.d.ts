import { Request, Response, NextFunction } from 'express'

export type AuthService = (request: Request, response: Response) => Promise<Response>
export type AuthMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction
) => Promise<Response | void>
