import { getCustomRepository } from 'typeorm'
import { Secret } from '../../database/entities/secret'
import { SecretRepository } from '../../database/repositories/secret-repo'

interface OperationInput {
  id: number
}

export const GetSecret = async (input: OperationInput): Promise<Secret> => {
  const repo = getCustomRepository(SecretRepository)
  const secret = await repo.findOne(input.id)

  if (!secret) {
    throw new Error('Secret not found')
  }

  return secret
}