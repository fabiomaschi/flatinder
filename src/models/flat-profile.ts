import { Gender } from '../database/entities/gender'
import { Occupation } from '../database/entities/occupation'
import { Geometry } from 'geojson'

export interface FlatProfile {
  // from user
  id: number
  email: string
  name: string
  profileImage: string
  // attributes
  address: string
  location: Geometry
  pricePerMonth: Number
  numberOfMaleFlatmates: Number
  numberOfFemaleFlatmates: Number
  youngestFlatmateAge: Number
  oldestFlatmateAge: Number
  smokingFlat: Boolean
  occupation: Occupation
  roomSize: Number
  roomHasOwnBathroom: Boolean
  description: string
  // preferences
  preferences: {
    applicantAgeMin: Number
    applicantAgeMax: Number
    applicantGender: Gender
    applicantSmoker: Boolean
    applicantOccupation: Occupation
  }
}
