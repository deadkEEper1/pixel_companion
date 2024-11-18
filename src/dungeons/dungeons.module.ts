import { Module } from '@nestjs/common';
import { DungeonsService } from './dungeons.service';
import { DungeonsResolver } from './dungeons.resolver';

@Module({
    providers: [DungeonsResolver, DungeonsService],
})
export class DungeonsModule {
}
