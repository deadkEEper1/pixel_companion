import { Resolver, Query, Args } from '@nestjs/graphql';
import { DungeonsService } from './dungeons.service';
import { Dungeon } from "./entities/dungeon.entity";

@Resolver()
export class DungeonsResolver {
    constructor(private readonly dungeonsService: DungeonsService) {
    }

    @Query( () => Dungeon)
    async getDungeon(@Args('seed') seed: string): Promise<Dungeon|null> {
        return this.dungeonsService.getDungeonBySeedOrCreateOne(seed);
    }
}
