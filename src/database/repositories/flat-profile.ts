import { EntityRepository, Repository } from "typeorm"
import { FlatProfile } from "../entities/flat-profile"

@EntityRepository(FlatProfile)
export class FlatProfileRepository extends Repository<FlatProfile> {

}
