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
            port: 5432,
            username: 'postgres',
            password: 'postgres',
            database: 'postgres',
            entities: values(entities),
            synchronize: true,
            logging: true
        })

        return this.connection;
    }
}

export const database = new Database()
