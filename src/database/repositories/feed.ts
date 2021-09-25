import { EntityRepository, Repository } from "typeorm"
import { Feed } from "../entities/feed"

@EntityRepository(Feed)
export class FeedRepository extends Repository<Feed> {

}
