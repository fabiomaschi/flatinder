import { MatchDecision } from '@app/database/entities'
import { MatchDecisionRepository } from '@app/database/repositories/match-decision-repository'
import { getCustomRepository } from 'typeorm'
import { UserRepository } from '@app/database/repositories/user'
import { UserRole } from '@app/database/entities/user'

interface LikeInput {
  initiatorRole: UserRole
  applicantId: number
  flatId: number
}

export async function Like (input: LikeInput): Promise<MatchDecision> {
  const repo = getCustomRepository(MatchDecisionRepository)
  const applicant = await getCustomRepository(UserRepository).findOne(input.applicantId)
  const flat = await getCustomRepository(UserRepository).findOne(input.flatId)

  if (flat === undefined || applicant === undefined) {
    throw new Error('Profiles not found')
  }

  
  const decision = await repo.findOneOrFail({ where: { applicant: input.applicantId, flat: input.flatId } })
    .catch(() => {
      const interim = new MatchDecision()
      interim.applicant = applicant.applicantProfile
      interim.flat = flat.flatProfile
      return interim
    })

  switch (input.initiatorRole) {
    case UserRole.APPLICANT:
      decision.applicantLiked = true
      break
    case UserRole.FLAT:
      decision.flatLiked = true
      break
  }

  return await repo.save(decision)
}
