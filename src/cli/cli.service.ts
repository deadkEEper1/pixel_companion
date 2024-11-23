import {Injectable} from '@nestjs/common';
import {Dungeon} from "../dungeons/entities/dungeon.entity";
import * as util from "util";
import {exec} from "child_process";

type ExecResult = { stdout: string; stderr: string };

@Injectable()
export class CliService {

    private exec = util.promisify(exec);


    async fetchDungeonItemsSummary(dungeon: Dungeon): Promise<string> {
        try {
            const command = `cd C:\\pixel_dungeon\\seed-finder-2.5.4 && java -jar seed-finder.jar 4 ${dungeon.seed}`;
            const executionResult = await this.exec(command) as ExecResult;
            return executionResult.stdout;
        } catch (e) {
            console.error(e);
        }
    }
}
