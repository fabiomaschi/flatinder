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
    applicantBirthday: Date;

    @Column()
    applicantSmoker: Boolean;

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
    flatLocationRadius: Number;

    @Column()
    flatMaxPrice: Number;

    @Column()
    flatMinPeople: Number

    @Column()
    flatMaxPeople: Number

    @Column({
        nullable: true,
    })
    roomHasOwnBathroom: Boolean

    @Column({
        nullable: true,
    })
    smokingFlat: Boolean;
}
