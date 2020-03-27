import { Router } from 'express'

import OrganizationController from '@Controllers/OrganizationController'
import IncidentController from '@Controllers/IncidentController'
import ProfileController from '@Controllers/ProfileController'
import AuthService from '@Services/AuthService'

const Routes = Router()

Routes.get('/auth', AuthService.authentication)
Routes.get('/profile', AuthService.authorization, ProfileController.index)

Routes.get('/incidents', IncidentController.index)
Routes.post('/incidents', AuthService.authorization, IncidentController.store)
Routes.delete('/incidents/:incidentId', AuthService.authorization, IncidentController.delete)

Routes.get('/organizations', OrganizationController.index)
Routes.post('/organizations', OrganizationController.store)

export default Routes
