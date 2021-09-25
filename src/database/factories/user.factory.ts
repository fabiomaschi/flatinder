import * as Faker from 'faker'
import {define} from 'typeorm-seeding'
import {User, UserRole} from '../entities/user'


define(User, (faker: typeof Faker) => {
  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()

  const user = new User()
  user.name = `${firstName} ${lastName}`
  user.email = faker.internet.email(firstName, lastName)
  user.role = faker.random.arrayElement([UserRole.APPLICANT, UserRole.FLAT])
  user.profileImage = `https://i.pravatar.cc/150?u=${user.email}`

  return user
})
