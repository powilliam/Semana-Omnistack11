import { Router } from 'express'

import OrganizationController from '../controllers/OrganizationController'
import IncidentController from '../controllers/IncidentController'
import AuthService from '../services/AuthService'

const Routes = Router()

Routes.get('/auth', AuthService.authentication)

Routes.get('/incidents', IncidentController.index)
Routes.post('/incidents', IncidentController.store)
Routes.delete('/incidents/:incidentId', IncidentController.delete)

Routes.get('/organizations', OrganizationController.index)
Routes.post('/organizations', OrganizationController.store)

export default Routes
