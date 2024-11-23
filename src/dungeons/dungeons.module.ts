import { Module } from '@nestjs/common';
import { DungeonsService } from './dungeons.service';
import { DungeonsResolver } from './dungeons.resolver';
import { TypeOrmModule } from "@nestjs/typeorm";
import { CliModule } from '../cli/cli.module';
import { Dungeon } from "./entities/dungeon.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Dungeon]), CliModule],
    providers: [DungeonsResolver, DungeonsService],
})
export class DungeonsModule {
}
