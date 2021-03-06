import { Context } from 'koa'
import * as compose from 'koa-compose'
import { GetFeedFlats } from '../operations/feed-flats/get'

export const get = compose([
  async (ctx: Context) => {
    const feed = await GetFeedFlats({flatEmail:String(ctx.params.flatEmail)})
    ctx.ok(feed)
  }
])
