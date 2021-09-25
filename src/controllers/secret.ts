import { Context } from 'koa'
import * as compose from 'koa-compose'
import { GetSecret } from '../operations/secret/get'
// import { GetSecret } from '../operations/secret/get'

export const get = compose([
    async (ctx: Context) => {
        const secret = await GetSecret({ id: Number(ctx.query.id) })
        ctx.ok({secret});
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