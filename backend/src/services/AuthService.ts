import { Request, Response, NextFunction } from 'express'
import { getRepository } from 'typeorm'

import { Organization } from '@Entity/Organization'

import { AuthService, AuthMiddleware } from '@Types/auth'

export interface IAuthService {
  authentication: AuthService
  authorization: AuthMiddleware
}

export default new (class AuthService implements IAuthService {
  public async authentication(request: Request, response: Response) {
    const { identification } = request.body

    const organizationRepository = getRepository(Organization)

    const searchedOrganization = await organizationRepository.findOne({
      where: { identification }
    })

    if (!searchedOrganization) {
      return response.status(401).json({ error: 'Invalid identification provided' })
    }

    return response.json({ name: searchedOrganization.name })
  }

  public async authorization(request: Request, response: Response, next: NextFunction) {
    const { authorization } = request.headers

    if (!authorization) {
      return response.status(404).json({ error: 'Token not provided' })
    }

    const organization = await getRepository(Organization).findOne({
      where: { identification: authorization }
    })

    if (!organization) {
      return response.status(404).json({ error: 'Organization is not registered' })
    }

    next()
  }
})()
