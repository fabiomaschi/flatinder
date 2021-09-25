// import { getCustomRepository } from 'typeorm'
import { User, UserRole } from '../../database/entities/user'
import { ApplicantProfile } from '../../database/entities/applicant-profile'
import { FlatProfile } from '../../database/entities/flat-profile'
// import { UserRepository } from '../../database/repositories/user'

export interface CreateUserInput {
  email: string,
  name: string,
  profileImage: string,
  role: UserRole
  flatProfile?: FlatProfile
  applicantProfile?: ApplicantProfile
}

export async function CreateUser (input: CreateUserInput): Promise<User> {
  // const repo = getCustomRepository(UserRepository)
  const user: User = new User()
  console.log(input)
  return user
}
