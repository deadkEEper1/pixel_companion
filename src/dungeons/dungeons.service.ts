import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from 'typeorm';

import {Dungeon} from "./entities/dungeon.entity";
import {Level} from "../level/entities/level.entity";
import {FindOneOptions} from "typeorm/find-options/FindOneOptions";

import { exec } from 'child_process';
const util = require('util');
const execPromise = util.promisify(exec);

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

    private async fetchDungeonItemsSummary(dungeon: Dungeon): Promise<string> {
        try {
            const command = `cd C:\\pixel_dungeon\\seed-finder-2.5.4 && java -jar seed-finder.jar 4 ${dungeon.seed}`;
            const executionResult = await execPromise(command);
            return  executionResult.stdout;
        }catch (e) {
            console.error(e);
        }
    }

    private async populateDungeonWithItems(dungeon: Dungeon): Promise<void> {
        const itemsSummary = await this.fetchDungeonItemsSummary(dungeon);
        console.log('itemsSummary\n', itemsSummary);
    }

    async createDungeon(seed: string): Promise<Dungeon> {
        const dungeon = this.dungeonRepo.create({seed});
        dungeon.levels = this.createLevels(dungeon);
        return this.dungeonRepo.save(dungeon);
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
            const dungeon = await this.createDungeon(seed);
            await this.populateDungeonWithItems(dungeon);
        }
        seedDungeon = await this.dungeonRepo.findOne(dungeonCriteria)
        return seedDungeon;
    }
}
