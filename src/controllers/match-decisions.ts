import { Context } from 'koa'
import * as compose from 'koa-compose'
import { UserRole } from '../database/entities/user'
import { Like } from '../operations/match-decisions/like'
import { Pass } from '../operations/match-decisions/pass'
import { GetUser } from '../operations/users/get'

export const like = compose([
  async (ctx: Context) => {
    let applicantId
    let flatId

    const initiator = await GetUser({ email: String(ctx.headers.initiator) })
    switch (initiator.role) {
      case UserRole.APPLICANT:
        applicantId = initiator.id
        flatId = ctx.params.profileId
        break
      case UserRole.FLAT:
        flatId = initiator.id
        applicantId = ctx.params.profileId
        break
    }

    const matchDecision = Like({
      initiatorRole: initiator.role,
      applicantId,
      flatId
    })

    ctx.created(matchDecision)
  }
])

export const pass = compose([
  async (ctx: Context) => {
    let applicantId
    let flatId

    const initiator = await GetUser({ email: String(ctx.headers.initiator) })
    switch (initiator.role) {
      case UserRole.APPLICANT:
        applicantId = initiator.id
        flatId = ctx.params.profileId
        break
      case UserRole.FLAT:
        flatId = initiator.id
        applicantId = ctx.params.profileId
        break
    }

    const matchDecision = Pass({
      initiatorRole: initiator.role,
      applicantId,
      flatId
    })

    ctx.created(matchDecision)
  }
])
