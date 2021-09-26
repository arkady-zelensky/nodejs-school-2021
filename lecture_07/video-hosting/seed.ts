import {createConnection} from "typeorm";
import * as faker from 'faker';
import {configService} from "./src/shared/config.service";
import {shuffle} from "./src/shared/utils";

const table: string = 'comments';

(async () => {
  const conn = await createConnection(configService.getTypeOrmConfig());
  const runner = conn.createQueryRunner();
  if (table === 'videos') {
    const channels = await runner.query(`select * from channels`);
    for (const channel of channels) {
      const videosCount = faker.datatype.number({min: 3, max: 30});
      for (let i = 0; i < videosCount; i++) {
        const title = faker.commerce.product();
        const preview_url = faker.internet.url();
        const file_url = faker.internet.url();
        const duration = faker.datatype.number({min: 30, max: 3600});
        const description = duration % 2 === 0 ? faker.commerce.productDescription() : null;
        await runner.query(`insert into videos (channel_id, title, description, preview_url, file_url, duration) values ($1, $2, $3, $4, $5, $6)`, [channel.id, title, description, preview_url, file_url, duration]);
      }
    }
  }
  else if (table === 'subscriptions') {
    const users = await runner.query(`select * from users`);
    const channels = await runner.query(`select * from channels`);
    const levels = ['standard', 'follower', 'fan', 'vip'];
    for (const user of users) {
      const subscriptionsCount = faker.datatype.number({min: 1, max: Math.round(channels.length / 10)});
      shuffle(channels);
      for (let i = 0; i < subscriptionsCount; i++) {
        const level = faker.random.arrayElement(levels);
        const subscribed_at = faker.datatype.datetime({min: +new Date() - 200 * 24 * 60 * 60 * 1000, max: +new Date()});
        await runner.query(`insert into subscriptions (channel_id, user_id, level, subscribed_at) values ($1, $2, $3, $4)`, [channels[i].id, user.id, level, subscribed_at]);
      }
    }
  }
  else if (table === 'comments') {
    const users = await runner.query(`select * from users`);
    const videos = await runner.query(`select * from videos`);
    const usersCount = Math.round(users.length / 10);
    for (let i = 0; i < usersCount; i++) {
      const videosCount = faker.datatype.number({min: 1, max: Math.round(videos.length / 10)});
      shuffle(videos);
      for (let j = 0; j < videosCount; j++) {
        const commentsCount = faker.datatype.number({min: 1, max: 3});
        for (let k = 0; k < commentsCount; k++) {
          const created_at = faker.datatype.datetime({min: +new Date() - 200 * 24 * 60 * 60 * 1000, max: +new Date()});
          const text = faker.lorem.sentence(10);
          await runner.query(`insert into comments (video_id, user_id, text, created_at) values ($1, $2, $3, $4)`, [videos[j].id, users[i].id, text, created_at]);
        }

      }

    }

  }

  await conn.close();
  console.log('done');
})();
