import { Request, Response } from 'express'

export type Controller = (request: Request, response: Response) => Promise<Response>
