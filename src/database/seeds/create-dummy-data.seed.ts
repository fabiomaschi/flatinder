import {Factory, Seeder} from 'typeorm-seeding'
import { ApplicantProfile } from '../entities/applicant-profile'
import { FlatProfile } from '../entities/flat-profile'
import { User, UserRole } from '../entities/user'


export default class CreateDummyData implements Seeder {

  public async run(factory: Factory): Promise<void> {
    await Promise.all((await factory(User)().createMany(20)).map(async user => {
        switch (user.role) {
            case UserRole.APPLICANT:
                return factory(ApplicantProfile)().map(async applicant => {
                    applicant.user = user
                    return applicant
                }).create()
            case UserRole.FLAT:
                return factory(FlatProfile)().map(async flat => {
                    flat.user = user
                    return flat
                }).create()
        }
    }))
  }

}
