import { Router } from 'express'

import OrganizationController from '@Controllers/OrganizationController'
import IncidentController from '@Controllers/IncidentController'
import AuthService from '@Services/AuthService'

const Routes = Router()

Routes.get('/auth', AuthService.authentication)

Routes.get('/incidents', IncidentController.index)
Routes.post('/incidents', IncidentController.store)
Routes.delete('/incidents/:incidentId', IncidentController.delete)

Routes.get('/organizations', OrganizationController.index)
Routes.post('/organizations', OrganizationController.store)

export default Routes
