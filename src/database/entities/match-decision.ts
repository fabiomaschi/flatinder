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

    @ManyToOne(() => FlatProfile, {nullable: false, eager: true})
    flat: FlatProfile;

    @ManyToOne(() => ApplicantProfile, {nullable: false, eager: true})
    applicant: ApplicantProfile;

    @Column({
        nullable: true,
    })
    flatLiked: boolean;

    @Column({
        nullable: true,
    })
    applicantLiked: boolean;

    @Column()
    score: number;

}
