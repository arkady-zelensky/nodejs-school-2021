import {CACHE_MANAGER, CacheKey, CacheTTL, Controller, Get, Inject, Logger} from '@nestjs/common';
import {Cache} from 'cache-manager';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private logger = new Logger(AppController.name);

  constructor(
    private readonly appService: AppService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  async testEndpoint(): Promise<any> {
    let value = await this.cacheManager.get('test');
    if (value) {
      this.logger.log('load from cache');
      return value;
    }
    value = await this.appService.testEndpoint();
    await this.cacheManager.set('test', value, { ttl: 60 })
    return value;
  }
}
