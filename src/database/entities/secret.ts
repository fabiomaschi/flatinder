import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('secret')
export class Secret {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;
}