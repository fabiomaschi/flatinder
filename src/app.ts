import "reflect-metadata"
import * as Koa from 'koa'
import * as koaBody from 'koa-body'
import * as kcors from 'kcors'
// eslint-disable-next-line @typescript-eslint/no-require-imports
import koaRespond = require('koa-respond')

import { config } from './config'
import { routes } from './routes'

import { database } from './database'

const app = new Koa();
app.use(koaRespond());
app.use(koaBody());
app.use(kcors({ origin: '*' }))

app.use(routes)

app.on('error', err => console.log({ err }, 'Unhandled error'))

const start = async () => {
    await database.start()
      .then(() => {
        app.listen(config.server.port, () => {
          console.log(`Server running on port ${config.server.port}`)
        })
      })
      .catch(error => {
        console.log(`Couldn't start the database`, error)
      })
}

start()
