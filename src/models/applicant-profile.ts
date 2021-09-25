import { Gender } from '../database/entities/gender'
import { Occupation } from '../database/entities/occupation'
import { Geometry } from 'geojson'

export interface ApplicantProfile {
  // from user
  id: number
  email: string
  name: string
  profileImage: string
  // attributes
  gender: Gender
  age: number
  smoker: Boolean
  occupation: Occupation
  description: string
  // preferences
  preferences : {
    flatLocationCenter: Geometry,
    flatLocationRadius: Number,
    flatMaxPrice: Number,
    flatMinPeople: Number,
    flatMaxPeople: Number,
    roomHasOwnBathroom?: Boolean,
    smokingFlat?: Boolean
  }
}
