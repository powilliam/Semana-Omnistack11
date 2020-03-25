import { Request, Response } from 'express'

export type AuthService = (request: Request, response: Response) => Promise<Response>
