import { Module } from '@nestjs/common';
import { LevelItemService } from './level-item.service';
import { LevelItemResolver } from './level-item.resolver';

@Module({
  providers: [LevelItemResolver, LevelItemService],
})
export class LevelItemModule {}
