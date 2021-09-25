import { getCustomRepository } from 'typeorm'
import { UserRole } from '../../database/entities/user'
import { UserRepository } from '../../database/repositories/user'
import { ApplicantProfile as ApplicantProfileDTO } from '../../models/applicant-profile'
import { FlatProfile as FlatProfileDTO } from '../../models/flat-profile'
import { UserTransformToApplicant, UserTransformToFlat } from '../../helpers/user-transforms'

export interface ListAllUsersInput {
  role?: UserRole
}

export interface ListAllUsersOutput {
  applicants: Array<ApplicantProfileDTO>
  flats: Array<FlatProfileDTO>
}

export async function ListAllUsers (input: ListAllUsersInput): Promise<ListAllUsersOutput> {
  const repo = getCustomRepository(UserRepository)
  const users = await repo.find({role: input.role})

  const output: ListAllUsersOutput = {
    applicants: [],
    flats: []
  }
  
  switch (input.role) {
    case UserRole.APPLICANT:
      users.map((user) => {
        output.applicants.push(UserTransformToApplicant(user))
      })
      break
    case UserRole.FLAT:
      users.map((user) => {
        output.flats.push(UserTransformToFlat(user))
      })
      break
  }

  return output
}
