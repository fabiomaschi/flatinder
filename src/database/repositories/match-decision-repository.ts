import {EntityRepository, Repository} from "typeorm";
import { MatchDecision } from "../entities";

@EntityRepository(MatchDecision)
export class MatchDecisionRepository extends Repository<MatchDecision> {
    
}