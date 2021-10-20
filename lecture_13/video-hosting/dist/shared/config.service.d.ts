import { ConnectionOptions } from 'typeorm/connection/ConnectionOptions';
export declare class ConfigService {
    private env;
    constructor(env: {
        [k: string]: string | undefined;
    });
    private getValue;
    ensureValues(keys: string[]): this;
    getPort(): string;
    isProduction(): boolean;
    getTypeOrmConfig(): ConnectionOptions;
}
declare const configService: ConfigService;
export { configService };
