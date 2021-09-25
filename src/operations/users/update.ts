// import { getCustomRepository } from 'typeorm'
import { User } from '../../database/entities/user'
import { ApplicantProfile } from '../../database/entities/applicant-profile'
import { FlatProfile } from '../../database/entities/flat-profile'
// import { UserRepository } from '../../database/repositories/user'

export interface UpdateUserInput {
  email: string
  name: string
  profileImage: string
  flatProfile?: FlatProfile
  applicantProfile?: ApplicantProfile
}

export async function UpdateUser (input: UpdateUserInput): Promise<User> {
  // const repo = getCustomRepository(UserRepository)
  const user: User = new User()
  console.log(input)
  return user
}
