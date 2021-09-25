import { getCustomRepository } from 'typeorm'
import { MatchDecision } from '../../database/entities/match-decision'
import { MatchDecisionRepository } from '../../database/repositories/match-decision'
import { GetUser } from '../../operations/users/get'
import { UserRole } from '../../database/entities/user'

export interface ListAllMatchesInput {
  email: string
}

export interface ListAllMatchesOutput {
  matches: Array<MatchDecision>
}

export async function ListAllMatches (input: ListAllMatchesInput): Promise<ListAllMatchesOutput> {
  const user = await GetUser({ email: input.email })

  let where:any  = { }
  switch (user.role) {
    case UserRole.APPLICANT:
      where.applicantProfile = user.applicantProfile
      break
    case UserRole.FLAT:
      where.flatProfile = user.flatProfile
      break
  }

  const matches = await getCustomRepository(MatchDecisionRepository).find( { where })
  
  return { matches }
} 
