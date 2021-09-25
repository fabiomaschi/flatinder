import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm"
import {Gender} from "./gender"
import {Occupation} from "./occupation"
import {User} from "./user"
import { Geometry } from 'geojson'


@Entity()
export class FlatProfile {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => User, user => user.flatProfile, {nullable: false})
    @JoinColumn()
    user: User;


    // attributes:

    @Column()
    flatAddress: string;

    @Column('geometry')
    flatLocation: Geometry;

    @Column()
    pricePerMonth: Number;

    @Column()
    numberOfMaleFlatmates: Number;

    @Column()
    numberOfFemaleFlatmates: Number;

    @Column()
    youngestFlatmateAge: Number;
    
    @Column()
    oldestFlatmateAge: Number;

    @Column()
    smokingFlat: Boolean;

    @Column({
        type: "enum",
        enum: Occupation,
        nullable: true,
    })
    flatOccupation: Occupation;

    @Column()
    roomSize: Number;

    @Column()
    roomHasOwnBathroom: Boolean;

    @Column()
    flatDescription: string;


    // preferences:

    @Column()
    applicantAgeMin: Number;

    @Column()
    applicantAgeMax: Number;

    @Column({
        type: "enum",
        enum: Gender,
    })
    applicantGender: Gender;

    @Column({
        nullable: true,
    })
    applicantSmoker: Boolean;

    @Column({
        type: "enum",
        enum: Occupation,
        nullable: true,
    })
    applicantOccupation: Occupation;
    
}
