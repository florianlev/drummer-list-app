import { Router } from 'express'
import { getDrummers, getDrummerById } from '../controller/DrummersController'

const router: Router = Router()

router.get('/drummers', getDrummers)
router.get('/drummers/:id', getDrummerById)


export default router
