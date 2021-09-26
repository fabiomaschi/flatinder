import { getCustomRepository, Between } from 'typeorm'
import { UserRepository } from '../../database/repositories/user'
import { UserRole } from '../../database/entities/user'
import { UserTransformToApplicant } from '../../helpers/user-transforms'
import { ApplicantProfile } from '../../models/applicant-profile'

export interface GetFeedFlatsInput {
  flatEmail: String
}

export interface GetFeedFlatsOutput {
  feed: Array<ApplicantProfile>
}

export async function GetFeedFlats (input: GetFeedFlatsInput): Promise<GetFeedFlatsOutput> {
  console.log(input.flatEmail)
  
  const repo = getCustomRepository(UserRepository)
  const flat = (await repo.find({
      relations: ["applicantProfile", "flatProfile"],
    where: { email: input.flatEmail}
  }))[0]
  let where: any = {
    role: UserRole.APPLICANT,
    applicantProfile: {
      applicantAge: Between(flat.flatProfile.applicantAgeMin, flat.flatProfile.applicantAgeMax),
    },
  }
  if (flat.flatProfile.applicantSmoker != undefined){
    where.applicantProfile.applicantSmoker = flat.flatProfile.applicantSmoker
  }
  if (flat.flatProfile.applicantGender != undefined){
    where.applicantProfile.applicantGender = flat.flatProfile.applicantGender
  }
  if (flat.flatProfile.flatOccupation != undefined){
    where.applicantProfile.applicantOccupation = flat.flatProfile.flatOccupation
  }
  
  const applicants = await repo.find({
    where:where,
    relations: ["applicantProfile"],
  })
  console.log(applicants)
  return {feed: applicants.map(appli => UserTransformToApplicant(appli))}
} 
