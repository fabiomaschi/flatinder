import { EntityRepository, Repository } from "typeorm"
import { ApplicantProfile } from "../entities/applicant-profile"

@EntityRepository(ApplicantProfile)
export class ApplicantProfileRepository extends Repository<ApplicantProfile> {

}
