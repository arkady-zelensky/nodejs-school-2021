import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    private logger;
    constructor(appService: AppService);
    getHello(): string;
}
