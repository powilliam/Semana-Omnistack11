import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import { AuthService } from './auth'
import { Organization } from '../database/entity/Organization'

export interface IAuthService {
  authentication: AuthService
}

export default new (class AuthService implements IAuthService {
  public async authentication(request: Request, response: Response) {
    const { authorization } = request.headers

    const organizationRepository = getRepository(Organization)

    const searchedOrganization = await organizationRepository.findOne({
      where: { identification: authorization }
    })

    if (!searchedOrganization) {
      return response.status(401).json({ error: 'Invalid identification provided' })
    }

    return response.json({ name: searchedOrganization.name })
  }
})()
