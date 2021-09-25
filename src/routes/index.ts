import * as Router from 'koa-router'
import * as controllers from '../controllers'

const router = new Router()

router.get('/status', controllers.status.get)
router.get('/secret', controllers.secret.get)

export const routes = router.routes()