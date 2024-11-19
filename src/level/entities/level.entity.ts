import {ObjectType} from '@nestjs/graphql';
import {ManyToOne, Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import {Dungeon} from '../../dungeons/entities/dungeon.entity';

@ObjectType()
@Entity('level')
export class Level {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Dungeon, (dungeon) => dungeon.levels)
    dungeon: Dungeon;

    @Column()
    level: number
}
