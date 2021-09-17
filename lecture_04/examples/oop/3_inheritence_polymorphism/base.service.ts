import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export abstract class BaseService<TEntity> {
  protected repository: Repository<TEntity>;

  list() {
    return this.repository.find();
  }

  findById(id: number) {
    return this.repository.findOne(id);
  }

  create(data: TEntity) {
    return this.repository.save(data);
  }

  update(data: TEntity) {
    return this.repository.save(data);
  }

  delete(id: number) {
    return this.repository.delete(id);
  }
}
