import { Context } from 'koa'
import * as compose from 'koa-compose'

export const get = compose([
    async (ctx: Context) => {
        ctx.ok({status: 'running'});
    }
])



// async (ctx: Context) => {
//     const options = {
//       order: {
//         column: ctx.query.orderColumn || 'createdAt',
//         direction: ctx.query.orderDirection || 'desc',
//       },
//       pagination: {
//         page: ctx.query.page || 0,
//         pageSize: ctx.query.pageSize || 15,
//       },
//     }
//     ctx.ok(await listUsers.execute(options))
//   },