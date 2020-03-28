import { Router } from 'express'
import { celebrate, Segments, Joi } from 'celebrate'

import OrganizationController from '@Controllers/OrganizationController'
import IncidentController from '@Controllers/IncidentController'
import ProfileController from '@Controllers/ProfileController'
import AuthService from '@Services/AuthService'

const Routes = Router()

Routes.get('/profile', AuthService.authorization, ProfileController.index)
Routes.post('/auth', AuthService.authentication)

Routes.get(
  '/incidents',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number()
    })
  }),
  IncidentController.index
)
Routes.post('/incidents', AuthService.authorization, IncidentController.store)
Routes.delete('/incidents/:incidentId', AuthService.authorization, IncidentController.delete)

Routes.get('/organizations', OrganizationController.index)
Routes.post(
  '/organizations',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.number().required().min(10).max(11),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2)
    })
  }),
  OrganizationController.store
)

export default Routes
