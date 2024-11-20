import {ObjectType, Field} from '@nestjs/graphql';
import {ManyToOne, OneToMany, Entity, Column, PrimaryGeneratedColumn, Unique} from 'typeorm';
import {Dungeon} from '../../dungeons/entities/dungeon.entity';
import {LevelItem} from "../../level-item/entities/level-item.entity";

@ObjectType()
@Entity('level')
@Unique(['dungeon', 'level'])
export class Level {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field(() => Dungeon, {description: 'Level\'s dungeon'})
    @ManyToOne(() => Dungeon, (dungeon) => dungeon.levels)
    dungeon: Dungeon;

    @Field(() => Number, {description: 'Level number'})
    @Column()
    level: number

    @Field(() => [LevelItem], {description: 'Items to be found on the level'})
    @OneToMany(() => LevelItem, (levelItem) => levelItem.level, {cascade: true})
    items: LevelItem[];
}
