export abstract class RepositoryMock<T> {

  protected items: T[];
  constructor() {
    this.items = [];
  }

  putFake(dto: T): void {
    this.items.push(dto);
  }

  getAll(): Promise<T[]> {
    return Promise.resolve(this.items);
  }

  abstract getOne(...options: any): Promise<T>;

  abstract createFake(): T;
}
