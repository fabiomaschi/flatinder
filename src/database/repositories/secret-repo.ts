import {EntityRepository, Repository} from "typeorm";
import { Secret } from "../entities/secret";

@EntityRepository(Secret)
export class SecretRepository extends Repository<Secret> {
    
}