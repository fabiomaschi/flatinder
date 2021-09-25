import { MatchDecision } from '../../database/entities'
import { MatchDecisionRepository } from '../../database/repositories/match-decision-repository'
import { getCustomRepository } from 'typeorm'
import { UserRepository } from '../../database/repositories/user'
import { UserRole } from '../../database/entities/user'

interface PassInput {
  initiatorRole: UserRole
  applicantId: number
  flatId: number  
}

export async function Pass (input: PassInput): Promise<MatchDecision> {
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
      decision.applicantLiked = false
      break
    case UserRole.FLAT:
      decision.flatLiked = false
      break
  }

  return await repo.save(decision)
}
