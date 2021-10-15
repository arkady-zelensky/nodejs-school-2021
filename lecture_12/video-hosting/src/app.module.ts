import { Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './shared/config.service';
import { ChannelsModule } from './channels/channels.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    ChannelsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
