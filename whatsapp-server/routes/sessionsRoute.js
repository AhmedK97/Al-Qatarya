import { Router } from 'express'
import { body } from 'express-validator'
import requestValidator from './../middlewares/requestValidator.js'
import sessionValidator from './../middlewares/sessionValidator.js'
import * as controller from './../controllers/sessionsController.js'

const router = Router()

router.get('/list', requestValidator, controller.list)

router.get('/find/:id', sessionValidator, controller.find)

router.get('/status/:id', sessionValidator, controller.status)

router.post('/add', body('id').notEmpty(), requestValidator, controller.add)

router.delete('/delete/:id', sessionValidator, controller.del)

export default router
