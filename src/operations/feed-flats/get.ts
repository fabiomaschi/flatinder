import { getCustomRepository } from 'typeorm'
import { UserRepository } from '../../database/repositories/user'
import { User, UserRole } from '../../database/entities/user'

export interface GetFeedFlatsInput {
}

export interface GetFeedFlatsOutput {
  feed: Array<User>
}

export async function GetFeedFlats (input: GetFeedFlatsInput): Promise<void> {
  console.log(input)
  const repo = getCustomRepository(UserRepository)
  
  const applicants = await repo.find({
    where: {
      role: UserRole.APPLICANT,
    },
    relations: ["applicantProfile"],
  })
  console.log(applicants)
} 