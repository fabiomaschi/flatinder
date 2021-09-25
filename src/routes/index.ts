import * as Router from 'koa-router'
import * as controllers from '../controllers'

const router = new Router()

router.get('/status', controllers.status.get)

router.get('/applicants', controllers.users.listAllApplicants)
router.post('/applicants', controllers.users.createApplicant)
router.get('/applicants/:email', controllers.users.getApplicant)
router.put('/applicants/:email', controllers.users.updateApplicant)

router.get('/flats', controllers.users.listAllFlats)
router.post('/flats', controllers.users.createFlat)
router.get('/flats/:email', controllers.users.getFlat)
router.put('/flats/:email', controllers.users.updateFlat)

router.get('/flat-feed', controllers.feedFlats.get)
router.get('/applicant-feed', controllers.feedApplicants.get)

router.post('/like', controllers.matchDecisions.like)
router.post('/pass', controllers.matchDecisions.pass)

router.get('/matches', controllers.matchDecisions.listAll)

export const routes = router.routes()
