import { Resolver, Query } from '@nestjs/graphql';
import { DungeonsService } from './dungeons.service';

@Resolver()
export class DungeonsResolver {
    constructor(private readonly dungeonsService: DungeonsService) {
    }

    @Query( () => String)
    getDungeon(): string {
        return this.dungeonsService.getDungeon();
    }
}
