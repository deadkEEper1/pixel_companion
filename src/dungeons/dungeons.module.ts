import { Module } from '@nestjs/common';
import { DungeonsService } from './dungeons.service';
import { DungeonsResolver } from './dungeons.resolver';
import { TypeOrmModule } from "@nestjs/typeorm";

import { Dungeon } from "./entities/dungeon.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Dungeon])],
    providers: [DungeonsResolver, DungeonsService],
})
export class DungeonsModule {
}
