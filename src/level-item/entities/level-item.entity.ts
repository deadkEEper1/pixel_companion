import {ObjectType, Field} from '@nestjs/graphql';
import {Entity, ManyToOne, PrimaryGeneratedColumn, Column} from 'typeorm';
import {Level} from 'src/level/entities/level.entity';

@Entity('level_item')
@ObjectType()
export class LevelItem {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Field(() => Level, {description: 'Level number'})
    @ManyToOne(() => Level, (level) => level.items)
    level: Level;

    @Field(() => String, {description: 'Item name'})
    @Column()
    name: string;
}
