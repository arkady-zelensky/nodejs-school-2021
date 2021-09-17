import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { BookEntity } from '../book/book.entity';
import { BaseService } from './base.service';

@Injectable()
export class BookService extends BaseService<BookEntity> {
  constructor() {
    super();

    this.repository = getRepository(BookEntity);
  }
}
