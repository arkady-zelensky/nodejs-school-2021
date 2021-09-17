import { Injectable } from '@nestjs/common';
import { getRepository, Repository } from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Injectable()
export class UserService {
  private repository: Repository<UserEntity>;

  constructor() {
    this.repository = getRepository(UserEntity);
  }

  list() {
    return this.repository.find();
  }

  findById(id: number) {
    return this.repository.findOne(id);
  }

  async create(data: UserEntity) {
    await this.checkIfUserAlreadyExists(data.email);

    return this.repository.save(data);
  }

  async update(data: UserEntity) {
    await this.checkIfUserAlreadyExists(data.email);

    return this.repository.save(data);
  }

  delete(id: number) {
    return this.repository.delete(id);
  }

  async checkIfUserAlreadyExists(email: string): Promise<void> {
    const existingUser = await this.repository.findOne({
      where: {
        email,
      },
    });

    if (existingUser) {
      throw new Error('User already exists!');
    }
  }
}
