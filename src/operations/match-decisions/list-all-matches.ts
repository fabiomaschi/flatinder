import { getCustomRepository } from 'typeorm'
import { MatchDecision } from '../../database/entities/match-decision'
import { MatchDecisionRepository } from '../../database/repositories/match-decision'
import { GetUser } from '../../operations/users/get'

export interface ListAllMatchesInput {
  email: string
}

export interface ListAllMatchesOutput {
  matches: Array<MatchDecision>
}

export async function ListAllMatches (input: ListAllMatchesInput): Promise<ListAllMatchesOutput> {
  const user = await GetUser({ email: input.email })

  switch
  const matches = getCustomRepository(MatchDecisionRepository).find( { where: {
  
  const applicants = await repo.find({
    where: {
      role: UserRole.APPLICANT,
    },
    relations: ["applicantProfile"],
  })
  console.log(applicants)
} 
