import { Context } from 'koa'
import * as compose from 'koa-compose'

import { UserRole } from '../database/entities/user'
import { Gender } from '../database/entities/gender'
import { Occupation } from '../database/entities/occupation'

import { ListAllUsers } from '../operations/users/list-all'
import { CreateUser } from '../operations/users/create'
import { GetUser } from '../operations/users/get'
import { UpdateUser } from '../operations/users/update'

// APPLICANT
export const listAllApplicants = compose([
  async (ctx: Context) => {
    const list = await ListAllUsers({ role: UserRole.APPLICANT })
    ctx.ok(list)
  }
])

export const createApplicant = compose([
  async (ctx: Context) => {
    const user = await CreateUser({
      email: String(ctx.request.body.email),
      name: String(ctx.request.body.name),
      profileImage: String(ctx.request.body.profileImage),
      role: UserRole.APPLICANT,
      applicantProfile: {
        ...ctx.request.body,
        applicantGender: Gender[ctx.request.body.gender as keyof typeof Gender],
        applicantBirthday: new Date(ctx.request.body.birthday),
        applicantSmoker: Boolean(ctx.request.body.smoker),
        applicantOccupation: Occupation[ctx.request.body.occupation as keyof typeof Occupation],
        description: String(ctx.request.body.description),
        flatLocationCenter: ctx.request.body.preferences.flatLocationCenter,
        flatLocationRadius: Number(ctx.request.body.preferences.flatLocationRadius),
        flatMaxPrice: Number(ctx.request.body.preferences.flatMaxPrice),
        flatMinPeople: Number(ctx.request.body.preferences.flatMinPeople),
        flatMaxPeople: Number(ctx.request.body.preferences.flatMaxPeople),
        roomHasOwnBathroom: Boolean(ctx.request.body.preferences.roomHasOwnBathroom),
        smokingFlat: Boolean(ctx.request.body.preferences.smokingFlat)
      }
    })
    ctx.created(user)
  }
])

export const getApplicant = compose([
  async (ctx: Context) => {
    const user = await GetUser({ email: String(ctx.params.id) })
    ctx.ok(user)
  }
])

export const updateApplicant = compose([
  async (ctx: Context) => {
    const user = await UpdateUser({
      email: String(ctx.request.body.email),
      name: String(ctx.request.body.name),
      profileImage: String(ctx.request.body.profileImage),
      applicantProfile: {
        ...ctx.request.body,
        applicantGender: Gender[ctx.request.body.gender as keyof typeof Gender],
        applicantBirthday: new Date(ctx.request.body.birthday),
        applicantSmoker: Boolean(ctx.request.body.smoker),
        applicantOccupation: Occupation[ctx.request.body.occupation as keyof typeof Occupation],
        description: String(ctx.request.body.description),
        flatLocationCenter: ctx.request.body.preferences.flatLocationCenter,
        flatLocationRadius: Number(ctx.request.body.preferences.flatLocationRadius),
        flatMaxPrice: Number(ctx.request.body.preferences.flatMaxPrice),
        flatMinPeople: Number(ctx.request.body.preferences.flatMinPeople),
        flatMaxPeople: Number(ctx.request.body.preferences.flatMaxPeople),
        roomHasOwnBathroom: Boolean(ctx.request.body.preferences.roomHasOwnBathroom),
        smokingFlat: Boolean(ctx.request.body.preferences.smokingFlat)
      }
    })
    ctx.ok(user)
  }
])

// FLAT
export const listAllFlats = compose([
  async (ctx: Context) => {
    const list = await ListAllUsers({ role: UserRole.FLAT })
    ctx.ok(list)
  }
])

export const createFlat = compose([
  async (ctx: Context) => {
    const user = await CreateUser({
      email: String(ctx.request.body.email),
      name: String(ctx.request.body.email),
      profileImage: String(ctx.request.body.profileImage),
      role: UserRole.FLAT,
      flatProfile: {
        ...ctx.request.body,
        flatAddress: String(ctx.request.body.address),
        flatLocation: ctx.request.body.location,
        pricePerMonth: Number(ctx.request.body.pricePerMonth),
        numberOfMaleFlatmates: Number(ctx.request.body.numberOfMaleFlatmates),
        numberOfFemaleFlatmates: Number(ctx.request.body.numberOfFemaleFlatmates),
        youngestFlatmateAge: Number(ctx.request.body.youngestFlatmateAge),
        oldestFlatmateAge: Number(ctx.request.body.oldestFlatmateAge),
        smokingFlat: Boolean(ctx.request.body.smokingFlat),
        flatOccupation: Occupation[ctx.request.body.occupation as keyof typeof Occupation],
        roomSize: Number(ctx.request.body.roomSize),
        roomHasOwnBathroom: Boolean(ctx.request.body.roomHasOwnBathroom),
        flatDescription: String(ctx.request.body.description),
        applicantAgeMin: Number(ctx.request.body.preferences.applicantAgeMin),
        applicantAgeMax: Number(ctx.request.body.preferences.applicantAgeMax),
        applicantGender: Gender[ctx.request.body.preferences.applicantGender as keyof typeof Gender],
        applicantSmoker: Boolean(ctx.request.body.preferences.applicantSmoker),
        applicantOccupation: Occupation[ctx.request.body.preferences.applicantOccupation as keyof typeof Occupation]
      }
    })
    ctx.created(user)
  }
])

export const getFlat = compose([
  async (ctx: Context) => {
    const user = await GetUser({ email: String(ctx.params.id) })
    ctx.ok(user)
  }
])

export const updateFlat = compose([
  async (ctx: Context) => {
    const user = await UpdateUser({
      email: String(ctx.request.body.email),
      name: String(ctx.request.body.email),
      profileImage: String(ctx.request.body.profileImage),
      flatProfile: {
        ...ctx.request.body,
        flatAddress: String(ctx.request.body.address),
        flatLocation: ctx.request.body.location,
        pricePerMonth: Number(ctx.request.body.pricePerMonth),
        numberOfMaleFlatmates: Number(ctx.request.body.numberOfMaleFlatmates),
        numberOfFemaleFlatmates: Number(ctx.request.body.numberOfFemaleFlatmates),
        youngestFlatmateAge: Number(ctx.request.body.youngestFlatmateAge),
        oldestFlatmateAge: Number(ctx.request.body.oldestFlatmateAge),
        smokingFlat: Boolean(ctx.request.body.smokingFlat),
        flatOccupation: Occupation[ctx.request.body.occupation as keyof typeof Occupation],
        roomSize: Number(ctx.request.body.roomSize),
        roomHasOwnBathroom: Boolean(ctx.request.body.roomHasOwnBathroom),
        flatDescription: String(ctx.request.body.description),
        applicantAgeMin: Number(ctx.request.body.preferences.applicantAgeMin),
        applicantAgeMax: Number(ctx.request.body.preferences.applicantAgeMax),
        applicantGender: Gender[ctx.request.body.preferences.applicantGender as keyof typeof Gender],
        applicantSmoker: Boolean(ctx.request.body.preferences.applicantSmoker),
        applicantOccupation: Occupation[ctx.request.body.preferences.applicantOccupation as keyof typeof Occupation]
      }
    })
    ctx.ok(user)
  }
])
