import * as Router from 'koa-router'
import * as controllers from '../controllers'

const router = new Router()

router.get('/status', controllers.status.get)

router.get('/applicants', controllers.users.listAllApplicants)
router.post('/applicants', controllers.users.createApplicant)
router.get('/applicants/:id', controllers.users.getApplicant)
router.put('/applicants/:id', controllers.users.updateApplicant)

router.get('/flats', controllers.users.listAllFlats)
router.post('/flats', controllers.users.createFlat)
router.get('/flats/:id', controllers.users.getFlat)
router.put('/flats/:id', controllers.users.updateFlat)

router.get('/flat-feed', controllers.feedFlats.get)
router.get('/applicant-feed', controllers.feedApplicants.get)

export const routes = router.routes()
