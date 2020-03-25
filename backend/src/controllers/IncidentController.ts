import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import { Organization } from '@Entity/Organization'
import { Incident } from '@Entity/Incident'

import { Controller } from '@Types/controller'

export interface IIncidentController {
  index: Controller
  store: Controller
  delete: Controller
}

export default new (class IncidentController implements IIncidentController {
  public async index(request: Request, response: Response) {
    const { page = 1 } = request.query

    const incidentRepository = getRepository(Incident)

    const incidentsCount = await incidentRepository.count()

    const incidents = await incidentRepository.find({
      relations: ['organization'],
      select: ['id', 'title', 'value', 'description'],
      take: 5,
      skip: (page - 1) * 5
    })

    response.header('X-Total-Count', `${incidentsCount}`)

    return response.json(incidents)
  }

  public async store(request: Request, response: Response) {
    const { title, description, value } = request.body
    const { authorization } = request.headers

    const organizationRepository = getRepository(Organization)
    const incidentRepository = getRepository(Incident)

    const relatedOrganization = await organizationRepository.findOne({
      where: { identification: authorization }
    })

    const newInsident = incidentRepository.create({
      title,
      description,
      value,
      organization: relatedOrganization
    })

    await incidentRepository.save(newInsident)

    return response.json(newInsident)
  }

  public async delete(request: Request, response: Response) {
    const { incidentId } = request.params
    const { authorization } = request.headers

    const incidentRepository = getRepository(Incident)

    const searchedIncident = await incidentRepository.findOne({
      where: {
        id: incidentId
      },
      relations: ['organization']
    })

    if (!searchedIncident) {
      return response.status(404).json({ error: 'Searched incident doesnt exist' })
    } else if (searchedIncident.organization.identification !== authorization) {
      return response.status(401).json({
        error: 'You cannot delete this incident because you dont have privileges'
      })
    }

    await incidentRepository.delete(searchedIncident)

    return response.status(204).json()
  }
})()
