import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import { Organization } from '@Entity/Organization'
import { Controller } from '@Types/controller'

interface IProfileController {
  index: Controller
}

export default new (class ProfileController implements IProfileController {
  public async index(request: Request, response: Response) {
    const { authorization } = request.headers

    const organization = await getRepository(Organization).findOne({
      where: { identification: authorization },
      relations: ['incidents']
    })

    return response.json(organization)
  }
})()
