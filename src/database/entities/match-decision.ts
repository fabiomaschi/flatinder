import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, Unique} from "typeorm"
import {FlatProfile} from "./flat-profile"
import {ApplicantProfile} from "./applicant-profile"


@Entity()
@Unique(['flat', 'applicant'])
export class MatchDecision {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => FlatProfile, {nullable: false})
    flat: FlatProfile;

    @ManyToOne(() => ApplicantProfile, {nullable: false})
    applicant: ApplicantProfile;

    @Column({
        nullable: true,
    })
    flatLiked: Boolean;

    @Column({
        nullable: true,
    })
    applicantLiked: Boolean;

    @Column()
    score: number;

}
