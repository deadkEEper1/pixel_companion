import {ObjectType, Field, ID} from '@nestjs/graphql';
import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {Level} from "../../level/entities/level.entity";

@ObjectType()
@Entity('dungeon')
export class Dungeon {
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field(() => String, {description: 'Seed value'})
    @Column()
    seed: string;

    @OneToMany(() => Level, (level) => level.dungeon, {cascade: true})
    levels: Level[];
}
