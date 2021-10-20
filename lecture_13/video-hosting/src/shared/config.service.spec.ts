import {ConfigService} from "./config.service";

describe('ConfigService', () => {
  it('should be defined', () => {
    const result = new ConfigService(process.env);

    expect(result).toBeDefined();
  });
});
