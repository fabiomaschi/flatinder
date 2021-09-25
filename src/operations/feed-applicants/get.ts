import { getCustomRepository } from 'typeorm'
import { User, UserRole } from '../../database/entities/user'
import { UserRepository } from '../../database/repositories/user'

export interface GetFeedApplicantsInput {
}

export interface GetFeedApplicantsOutput {
  feed: Array<User>
}

export async function GetFeedApplicants (input: GetFeedApplicantsInput): Promise<void> {
  console.log(input)
  const repo = getCustomRepository(UserRepository)
  
  const flats = await repo.find({
    where: {
      role: UserRole.FLAT,
    },
    relations: ["flatProfile"],
  })
  console.log(flats)
} 
