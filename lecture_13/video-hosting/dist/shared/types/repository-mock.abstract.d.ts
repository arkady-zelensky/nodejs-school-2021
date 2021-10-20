export declare abstract class RepositoryMock<T> {
    protected items: T[];
    constructor();
    putFake(dto: T): void;
    getAll(): Promise<T[]>;
    abstract getOne(...options: any): Promise<T>;
    abstract createFake(): T;
}
