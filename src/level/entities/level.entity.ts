import {ObjectType, Field} from '@nestjs/graphql';
import {ManyToOne, Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import {Dungeon} from '../../dungeons/entities/dungeon.entity';

@ObjectType()
@Entity('level')
export class Level {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field(() => Dungeon, {description: 'Level\'s dungeon'})
    @ManyToOne(() => Dungeon, (dungeon) => dungeon.levels)
    dungeon: Dungeon;

    @Field(() => Number, {description: 'Level number'})
    @Column()
    level: number
}
