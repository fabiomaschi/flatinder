import { Context } from 'koa'
import * as compose from 'koa-compose'
import { GetFeed } from '../operations/feed/get'

export const get = compose([
  async (ctx: Context) => {
    const feed = await GetFeed({})
    ctx.ok(feed)
  }
])
