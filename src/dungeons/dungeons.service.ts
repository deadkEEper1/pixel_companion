import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from 'typeorm';

import {Dungeon} from "./entities/dungeon.entity";
import {Level} from "../level/entities/level.entity";
import {FindOneOptions} from "typeorm/find-options/FindOneOptions";

@Injectable()
export class DungeonsService {
    constructor(
        @InjectRepository(Dungeon)
        private dungeonRepo: Repository<Dungeon>
    ) {
    }

    private createLevels(dungeon: Dungeon): Level[] {
        return Array.from({length: 25})
            .map((_, i) => {
                const newLevel = new Level();
                newLevel.level = i + 1;
                newLevel.dungeon = dungeon;
                return newLevel;
            });
    }

    async createDungeon(seed: string): Promise<void> {
        const dungeon = this.dungeonRepo.create({seed});
        dungeon.levels = this.createLevels(dungeon);
        await this.dungeonRepo.save(dungeon);
    }

    async getDungeonBySeedOrCreateOne(seed: string): Promise<Dungeon> {
        const dungeonCriteria = {
            where: {seed},
            relations: ['levels', 'levels.items'],
            order: {
                levels: {
                    level: 'ASC', // Order levels by their "level" property in ascending order
                },
            },
        } as FindOneOptions<Dungeon>;

        let seedDungeon = await this.dungeonRepo.findOne(dungeonCriteria);

        if (!seedDungeon) {
            await this.createDungeon(seed);
        }
        seedDungeon = await this.dungeonRepo.findOne(dungeonCriteria)
        return seedDungeon;
    }
}
