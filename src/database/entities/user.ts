import {Entity, PrimaryGeneratedColumn, Column, OneToOne, Unique} from "typeorm"
import {FlatProfile} from "./flat-profile"
import {ApplicantProfile} from "./applicant-profile"


export enum UserRole {
    APPLICANT = "applicant",
    FLAT = "flat",
}


@Entity()
@Unique(['email'])
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    name: string;

    @Column()
    profileImage: string;

    @Column({
        type: "enum",
        enum: UserRole,
    })
    role: UserRole;

    @OneToOne(() => FlatProfile, profile => profile.user)
    flatProfile: FlatProfile;

    @OneToOne(() => ApplicantProfile, profile => profile.user)
    applicantProfile: ApplicantProfile;

}
