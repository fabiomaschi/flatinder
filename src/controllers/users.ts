import { Context } from 'koa'
import * as compose from 'koa-compose'
import { UserRole } from '../database/entities/user.ts'
import { ListAllUsers } from '../operations/users/list-all'
import { CreateUser } from '../operations/users/create'
import { GetUser } from '../operations/users/get'
import { UpdateUser } from '../operations/users/update'

export const listAll = compose([
  async (ctx: Context) => {
    const list = await ListAllUsers()
    ctx.ok(list)
  }
])

export const create = compose([
  async (ctx: Context) => {
    const user = await CreateUser({
      email: String(ctx.body.email),
      role: UserRole(ctx.body.role),
      flatProfile: {},
      applicantProfile: {}
    })
    ctx.created(user)
  }
])

export const get = compose([
  async (ctx: Context) => {
    const user = await GetUser({ email: String(ctx.params.id) })
    ctx.ok(user)
  }
])

export const update = compose([
  async (ctx: Context) => {
    const user = await UpdateUser({
      email: String(ctx.body.email)
    })
    ctx.ok(user)
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
