import * as Faker from 'faker'
import {define} from 'typeorm-seeding'
import { ApplicantProfile } from '../entities/applicant-profile'
import { Gender } from '../entities/gender'
import { Occupation } from '../entities/occupation'


define(ApplicantProfile, (faker: typeof Faker) => {
  const applicant = new ApplicantProfile()
  applicant.applicantGender = faker.random.arrayElement([Gender.FEMALE, Gender.MALE])
  applicant.applicantBirthday = faker.date.past()
  applicant.applicantSmoker = faker.random.boolean()
  applicant.applicantOccupation = faker.random.arrayElement([Occupation.STUDENT, Occupation.WORKING])
  applicant.description = faker.lorem.paragraph()
  applicant.flatLocationCenter = {
    type: "Point",
    coordinates: [0, 0],
  }
  applicant.flatLocationRadius = faker.random.number({min: 1000, max: 30000})
  applicant.flatMaxPrice = faker.random.number({min: 300, max: 3000})
  applicant.flatMinPeople = faker.random.number(10)
  applicant.flatMaxPeople = faker.random.number({min: applicant.flatMinPeople, max: 20})
  applicant.roomHasOwnBathroom = faker.random.arrayElement([true, false, undefined])
  applicant.smokingFlat = faker.random.arrayElement([true, false, undefined])

  return applicant
})
