import * as Router from 'koa-router'
import * as controllers from '../controllers'

const router = new Router()

router.get('/status', controllers.status.get)

router.get('/users', controllers.users.listAll)
router.post('/users', controllers.users.create)
router.get('/users/:id', controllers.users.get)
router.put('/users/:id', controllers.users.update)

router.get('/feed', controllers.feed.get)

export const routes = router.routes()
