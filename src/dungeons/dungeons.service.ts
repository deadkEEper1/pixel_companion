import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from 'typeorm';

import {Dungeon} from "./entities/dungeon.entity";

@Injectable()
export class DungeonsService {
    constructor(
        @InjectRepository(Dungeon)
        private dungeonRepo: Repository<Dungeon>
    ) {
    }

    async getDungeon(): Promise<Dungeon[]> {
        return await this.dungeonRepo.find();
    }

    async getDungeonBySeedOrCreateOne(seed: string): Promise<Dungeon> {
        let seedDungeon = await this.dungeonRepo.findOne({where: {seed}});
        if (!seedDungeon) {
            seedDungeon = await this.dungeonRepo.save({seed});
        }
        return seedDungeon;
    }
}
