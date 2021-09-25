import { User } from '../database/entities/user'
import { ApplicantProfile } from '../models/applicant-profile'
import { FlatProfile } from '../models/flat-profile'

export function UserTransformToApplicant (user: User): ApplicantProfile {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    profileImage: user.profileImage,
    gender: user.applicantProfile.applicantGender,
    birthday: user.applicantProfile.applicantBirthday,
    smoker: user.applicantProfile.applicantSmoker,
    occupation: user.applicantProfile.applicantOccupation,
    description: user.applicantProfile.description,
    preferences: {
      flatLocationCenter: user.applicantProfile.flatLocationCenter,
      flatLocationRadius: user.applicantProfile.flatLocationRadius,
      flatMaxPrice: user.applicantProfile.flatMaxPrice,
      flatMinPeople: user.applicantProfile.flatMinPeople,
      flatMaxPeople: user.applicantProfile.flatMaxPeople,
      roomHasOwnBathroom: user.applicantProfile.roomHasOwnBathroom,
      smokingFlat: user.applicantProfile.smokingFlat
    }
  }
}

export function UserTransformToFlat (user: User): FlatProfile {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    profileImage: user.profileImage,
    address: user.flatProfile.flatAddress,
    location: user.flatProfile.flatLocation,
    pricePerMonth: user.flatProfile.pricePerMonth,
    numberOfMaleFlatmates: user.flatProfile.numberOfMaleFlatmates,
    numberOfFemaleFlatmates: user.flatProfile.numberOfFemaleFlatmates,
    youngestFlatmateAge: user.flatProfile.youngestFlatmateAge,
    oldestFlatmateAge: user.flatProfile.oldestFlatmateAge,
    smokingFlat: user.flatProfile.smokingFlat,
    occupation: user.flatProfile.flatOccupation,
    roomSize: user.flatProfile.roomSize,
    roomHasOwnBathroom: user.flatProfile.roomHasOwnBathroom,
    description: user.flatProfile.flatDescription,
    preferences: {
      applicantAgeMin: user.flatProfile.applicantAgeMin,
      applicantAgeMax: user.flatProfile.applicantAgeMax,
      applicantGender: user.flatProfile.applicantGender,
      applicantSmoker: user.flatProfile.applicantSmoker,
      applicantOccupation: user.flatProfile.applicantOccupation
    }
  }
}
