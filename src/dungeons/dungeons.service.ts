import { Injectable } from '@nestjs/common';

@Injectable()
export class DungeonsService {
    getDungeon(): string {
        return 'Get dungeon';
    }
}
