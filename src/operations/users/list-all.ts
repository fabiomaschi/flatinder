import { getCustomRepository } from 'typeorm'
import { User } from '../../database/entities/user'
import { UserRepository } from '../../database/repositories/user'

export async function ListAllUsers (): Promise<User[]> {
  const repo = getCustomRepository(UserRepository)
  const users = await repo.find()

  return users
}
