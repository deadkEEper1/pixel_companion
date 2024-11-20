import {ObjectType, Field} from '@nestjs/graphql';
import {Entity, ManyToOne, PrimaryGeneratedColumn, Column} from 'typeorm';
import {Level} from 'src/level/entities/level.entity';

export enum ItemType {
    potion = 'potion',
    scroll = 'scroll',
}

@Entity('level_item')
@ObjectType()
export class LevelItem {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => String, {description: 'Unique identifier of the item'})
    id: string;

    @Field(() => Level, {description: 'Level number'})
    @ManyToOne(() => Level, (level) => level.items)
    level: Level;

    @Field(() => String, {description: 'image file name'})
    @Column({type: 'varchar'})
    image: string;

    @Field(() => String, {description: 'Item type', defaultValue: 'potion'})
    @Column({type: 'enum', enum: ItemType, default: ItemType.potion})
    type: ItemType;
    // Potion specific fields, separate table?

    @Field(() => String, {description: 'Color of the potion'})
    @Column({type: 'varchar'})
    color: string;

    @Field(() => String, {description: 'Effect of the potion'})
    @Column({type: 'varchar', nullable: true})
    effect: string;
}
