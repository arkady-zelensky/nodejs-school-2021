import * as util from 'util';
import * as path from 'path';
import * as fs from 'fs';
import { createConnection } from "typeorm";
import { configService } from "../src/shared/config.service";

const files = [
    '0.schema.sql',
    '1.users.sql',
    '2.channels.sql',
    '3.videos.sql',
    '4.subscriptions.sql',
    '5.comments.sql',
    '6.likes.sql',
];
const readFile = util.promisify(fs.readFile);

(async () => {
  const conn = await createConnection(configService.getTypeOrmConfig());
  const runner = conn.createQueryRunner();
  for (const file of files) {
    const query = await readFile(path.join(__dirname, '../../seed', file), 'utf8');
    await runner.query(query);
  }

  await conn.close();
  console.log('tables were created and filled with test data');
})();
