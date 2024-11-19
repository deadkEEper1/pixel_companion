import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from 'typeorm';

import {Dungeon} from "./entities/dungeon.entity";
import {Level} from "../level/entities/level.entity";

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

    async createDungeon(seed: string): Promise<Dungeon> {
        const dungeon = this.dungeonRepo.create({seed, levels: [{level: 1}]});
        dungeon.levels = this.createLevels(dungeon);
        return this.dungeonRepo.save(dungeon);
    }

    async getDungeonBySeedOrCreateOne(seed: string): Promise<Dungeon> {
        let seedDungeon = await this.dungeonRepo.findOne({where: {seed}, relations: ['levels', 'levels.items']});
        if (!seedDungeon) {
            seedDungeon = await this.createDungeon(seed);
        }

        return seedDungeon;
    }
}
