import {ConfigService} from "./config.service";

describe('ConfigService', () => {
  it('should be defined', () => {
    process.env.PG_HOST = 'localhost';
    const result = new ConfigService(process.env);

    expect(result).toBeDefined();
  });
});
