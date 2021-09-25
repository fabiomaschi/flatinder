import { getCustomRepository } from 'typeorm'
import { User } from '../../database/entities/user'
import { UserRepository } from '../../database/repositories/user'

export interface GetUserInput {
  email: string
}

export async function GetUser (input: GetUserInput): Promise<User> {
  const repo = getCustomRepository(UserRepository)
  const user = (await repo.find({
      where: {email: input.email},
      relations: ['applicantProfile', 'flatProfile'],
  }))[0]

  if (user === undefined) {
    throw new Error('User not found')
  }

  return user
}
