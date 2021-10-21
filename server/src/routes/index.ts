import { Router } from 'express'
import { getDrummers } from '../controller/DrummersController'

const router: Router = Router()

router.get('/drummers', getDrummers)

export default router
