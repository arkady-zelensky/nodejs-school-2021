import {createConnection} from "typeorm";
import * as faker from 'faker';
import {configService} from "./src/shared/config.service";

(async () => {
  const conn = await createConnection(configService.getTypeOrmConfig());
  const runner = conn.createQueryRunner();
  const channels = await runner.query(`select * from channels`);
  for (const channel of channels) {
    const videosCount = faker.datatype.number({min: 3, max: 30})
    for (let i = 0; i < videosCount; i++) {
      const title = faker.commerce.product();
      const preview_url = faker.internet.url();
      const file_url = faker.internet.url();
      const duration = faker.datatype.number({min: 30, max: 3600});
      const description = duration % 2 === 0 ? faker.commerce.productDescription() : null;
      await runner.query(`insert into videos (channel_id, title, description, preview_url, file_url, duration) values ($1, $2, $3, $4, $5, $6)`, [channel.id, title, description, preview_url, file_url, duration]);
    }
  }
  await conn.close();
  console.log('done');
})();
