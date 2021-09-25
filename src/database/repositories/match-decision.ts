import { EntityRepository, Repository } from "typeorm"
import { MatchDecision } from "../entities/match-decision"

@EntityRepository(MatchDecision)
export class MatchDecisionRepository extends Repository<MatchDecision> {

}
