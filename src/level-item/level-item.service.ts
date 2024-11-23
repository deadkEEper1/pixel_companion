import {Injectable} from '@nestjs/common';
import {CreateLevelItemInput} from './dto/create-level-item.input';
import {UpdateLevelItemInput} from './dto/update-level-item.input';
import {LevelItem} from './entities/level-item.entity';

import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from 'typeorm';
import {ItemType} from "./entities/level-item.entity";


@Injectable()
export class LevelItemService {
    constructor(
        @InjectRepository(LevelItem)
        private levelItemRepo: Repository<LevelItem>
    ) {
    }

    async create(createLevelItemInput: CreateLevelItemInput) {
        try {
            return await this.levelItemRepo.save({
                color: createLevelItemInput.color,
                type: ItemType[createLevelItemInput.type],
                level: {id: createLevelItemInput.levelId},
                image: createLevelItemInput.image
            });
        } catch (e) {
            throw new Error(e);
        }
    }

    findAll() {
        return `This action returns all levelItem`;
    }

    findOne(id: number) {
        return `This action returns a #${id} levelItem`;
    }

    async update(id: string, updateLevelItemInput: UpdateLevelItemInput) {
        return this.levelItemRepo.update({id}, updateLevelItemInput as LevelItem);
    }

    remove(id: number) {
        return `This action removes a #${id} levelItem`;
    }
}
