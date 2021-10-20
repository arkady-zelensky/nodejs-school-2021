import { Injectable } from '@nestjs/common';
import { getConnection } from 'typeorm';
import {sleep} from "./shared/utils";

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async testEndpoint(): Promise<any> {
    const conn = await getConnection();
    const runner = conn.createQueryRunner();
    await sleep(1000);
    return runner.query(`SELECT 1+1 as two`);
  }
}
