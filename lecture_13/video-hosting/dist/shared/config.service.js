"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configService = exports.ConfigService = void 0;
require('dotenv').config();
class ConfigService {
    constructor(env) {
        this.env = env;
    }
    getValue(key, throwOnMissing = true) {
        const value = this.env[key];
        if (!value && throwOnMissing) {
            throw new Error(`config error - missing env.${key}`);
        }
        return value;
    }
    ensureValues(keys) {
        keys.forEach((k) => this.getValue(k, true));
        return this;
    }
    getPort() {
        return this.getValue('PORT', true);
    }
    isProduction() {
        const mode = this.getValue('NODE_ENV', false);
        return mode != 'DEV';
    }
    getTypeOrmConfig() {
        return {
            type: 'postgres',
            host: this.getValue('PG_HOST'),
            port: parseInt(this.getValue('PG_PORT')),
            username: this.getValue('PG_USER'),
            password: this.getValue('PG_PASSWORD'),
            database: this.getValue('PG_DATABASE'),
            entities: ['dist/**/*.entity{.ts,.js}'],
            migrationsTableName: 'migrations',
            migrations: ['src/migration/*.ts'],
            cli: {
                migrationsDir: 'src/migration',
            },
            synchronize: false,
            migrationsRun: false,
            ssl: this.isProduction(),
        };
    }
}
exports.ConfigService = ConfigService;
const configService = new ConfigService(process.env).ensureValues([
    'PG_HOST',
    'PG_PORT',
    'PG_USER',
    'PG_PASSWORD',
    'PG_DATABASE',
]);
exports.configService = configService;
//# sourceMappingURL=config.service.js.map