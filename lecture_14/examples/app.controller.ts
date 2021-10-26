import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/system')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health-check')
  healthCheck(): string {
    return this.appService.healthCheck();
  }
}
