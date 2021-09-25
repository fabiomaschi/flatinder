import * as Faker from 'faker'
import {define} from 'typeorm-seeding'
import { FlatProfile } from '../entities/flat-profile'
import { Gender } from '../entities/gender'
import { Occupation } from '../entities/occupation'


define(FlatProfile, (faker: typeof Faker) => {
  const flat = new FlatProfile()
  flat.flatAddress = faker.address.city()
  flat.flatLocation = {
    type: "Point",
    coordinates: [0, 0],
  }
  flat.pricePerMonth = faker.random.number({min: 300, max: 3000})
  flat.numberOfFemaleFlatmates = faker.random.number({min: 0, max: 9})
  flat.numberOfMaleFlatmates = faker.random.number({min: 0, max: 9})
  flat.applicantGender = faker.random.arrayElement([Gender.FEMALE, Gender.MALE])
  flat.youngestFlatmateAge = faker.random.number({min: 18, max: 50})
  flat.oldestFlatmateAge = faker.random.number({min: flat.youngestFlatmateAge, max: 99})
  flat.smokingFlat = faker.random.boolean()
  flat.flatOccupation = faker.random.arrayElement([Occupation.STUDENT, Occupation.WORKING])
  flat.roomSize = faker.random.number({min: 8, max: 30})
  flat.roomHasOwnBathroom = faker.random.boolean()
  flat.flatDescription = faker.lorem.paragraph()

  flat.applicantAgeMin = faker.random.number({min: 18, max: 50})
  flat.applicantAgeMax = faker.random.number({min: flat.applicantAgeMin, max: 99})
  flat.applicantGender = faker.random.arrayElement([Gender.MALE, Gender.FEMALE, undefined])
  flat.applicantSmoker = faker.random.arrayElement([true, false, undefined])
  flat.applicantOccupation = faker.random.arrayElement([Occupation.STUDENT, Occupation.WORKING, undefined])

  return flat
})
