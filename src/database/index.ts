import {createConnection, Connection} from "typeorm";
import { config } from '../config'
import { values} from 'ramda'
import * as entities from './entities'

class Database {
    public connection: Connection

    public async start(): Promise<Connection> {
        this.connection = await createConnection({
            type: 'postgres',
            url: config.database.connection,
            entities: values(entities),
        })

        return this.connection;
    }
}

export const database = new Database()