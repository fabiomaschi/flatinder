import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm"
import {Gender} from "./gender"
import {Occupation} from "./occupation"
import {User} from "./user"
import {Geometry} from 'geojson'


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
    pricePerMonth: number;

    @Column()
    numberOfMaleFlatmates: number;

    @Column()
    numberOfFemaleFlatmates: number;

    @Column()
    youngestFlatmateAge: number;
    
    @Column()
    oldestFlatmateAge: number;

    @Column()
    smokingFlat: boolean;

    @Column({
        type: "enum",
        enum: Occupation,
        nullable: true,
    })
    flatOccupation: Occupation;

    @Column()
    roomSize: number;

    @Column()
    roomHasOwnBathroom: boolean;

    @Column()
    flatDescription: string;


    // preferences:

    @Column()
    applicantAgeMin: number;

    @Column()
    applicantAgeMax: number;

    @Column({
        type: "enum",
        enum: Gender,
        nullable: true,
    })
    applicantGender?: Gender;

    @Column({
        nullable: true,
    })
    applicantSmoker?: boolean;

    @Column({
        type: "enum",
        enum: Occupation,
        nullable: true,
    })
    applicantOccupation?: Occupation;
    
}
