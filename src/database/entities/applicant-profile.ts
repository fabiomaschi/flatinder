import {Entity, Column, OneToOne, JoinColumn, PrimaryGeneratedColumn} from "typeorm"
import {Gender} from "./gender"
import {Occupation} from "./occupation"
import {User} from "./user"
import {Geometry} from 'geojson'


@Entity()
export class ApplicantProfile {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => User, user => user.applicantProfile, {nullable: false})
    @JoinColumn()
    user: User;


    // atributes:

    @Column()
    applicantGender: Gender;

    @Column()
    applicantAge: number;

    @Column()
    applicantSmoker: boolean;

    @Column({
        type: "enum",
        enum: Occupation,
        nullable: true,
    })
    applicantOccupation: Occupation;

    @Column()
    description: string;

    
    // preferences:

    @Column('geometry')
    flatLocationCenter: Geometry;

    @Column()
    flatLocationRadius: number;

    @Column()
    flatMaxPrice: number;

    @Column()
    flatMinPeople: number

    @Column()
    flatMaxPeople: number

    @Column({
        nullable: true,
    })
    roomHasOwnBathroom?: boolean

    @Column({
        nullable: true,
    })
    smokingFlat?: boolean;
}
