import { MatchDecision } from '@app/database/entities'
import { MatchDecisionRepository } from '@app/database/repositories/match-decision-repository'
import { getCustomRepository } from 'typeorm'
import { UserRepository } from '@app/database/repositories/user'
import { FlatProfileRepository } from '@app/database/repositories/flat-profile'

interface OperationInput {
  initiator: number //id of the initiator of the like, important for actually writing down the like
  applicantId: number
  flatId: number
  
}

export const Like = async (input: OperationInput): Promise<MatchDecision> => {
  const repo = getCustomRepository(MatchDecisionRepository)
  const userRepo = getCustomRepository(UserRepository)
  const applicant = await userRepo.findOne(input.applicantId)
  const flat = await getCustomRepository(FlatProfileRepository).findOne(input.flatId)
  let decision = await repo.find({ where: { applicant: input.applicantId, flat: input.flatId } });
  if (!decision) {
      decision = new MatchDecision()
      decision.applicant = applicant.applicantProfile
      decision.flat = flat.FlatProfile
  }
  if (input.initiator == input.applicantId){
    decision.applicantLiked = true
  } else {
    decision.flatLiked = true 
  }
  repo.save(decision)
  return decision
}