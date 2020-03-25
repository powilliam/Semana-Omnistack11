import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { randomBytes } from 'crypto'

import { Organization } from '@Entity/Organization'

import { Controller } from '@Types/controller'

export interface IOrganizationController {
  index: Controller
  store: Controller
}

export default new (class OrganizationController implements IOrganizationController {
  public async index(request: Request, response: Response) {
    const organizations = await getRepository(Organization).find({
      relations: ['incidents'],
      select: ['name', 'email', 'city', 'uf', 'whatsapp']
    })

    return response.json(organizations)
  }

  public async store(request: Request, response: Response) {
    const { name, email, whatsapp, city, uf } = request.body
    const identification = randomBytes(4).toString('HEX')
    const organizationRepository = getRepository(Organization)
    const newOrganization = organizationRepository.create({
      name,
      identification,
      email,
      whatsapp,
      city,
      uf
    })

    await organizationRepository.save(newOrganization)
    return response.json({ identification })
  }
})()
