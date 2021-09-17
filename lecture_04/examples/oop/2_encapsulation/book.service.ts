import { Injectable } from '@nestjs/common';
import { getRepository, Repository } from 'typeorm';
import { BookEntity } from '../book/book.entity';

@Injectable()
export class BookService {
  private repository: Repository<BookEntity>;

  constructor() {
    this.repository = getRepository(BookEntity);
  }

  list() {
    return this.repository.find();
  }

  findById(id: number) {
    return this.repository.findOne(id);
  }

  create(data: BookEntity) {
    return this.repository.save(data);
  }

  update(data: BookEntity) {
    return this.repository.save(data);
  }

  delete(id: number) {
    return this.repository.delete(id);
  }
}
