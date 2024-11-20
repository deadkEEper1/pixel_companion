import { Module } from '@nestjs/common';
import { LevelItemService } from './level-item.service';
import { LevelItemResolver } from './level-item.resolver';
import {TypeOrmModule} from "@nestjs/typeorm";
import {LevelItem} from "./entities/level-item.entity";

@Module({
  imports: [TypeOrmModule.forFeature([LevelItem])],
  providers: [LevelItemResolver, LevelItemService],
})
export class LevelItemModule {}
