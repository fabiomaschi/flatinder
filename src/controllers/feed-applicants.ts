import { Context } from 'koa'
import * as compose from 'koa-compose'
import { GetFeedApplicants } from '../operations/feed-applicants/get'

export const get = compose([
  async (ctx: Context) => {
    const feed = await GetFeedApplicants({})
    ctx.ok(feed)
  }
])
