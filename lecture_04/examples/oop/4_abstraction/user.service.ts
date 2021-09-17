import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { BaseService } from './base.service';

@Injectable()
export class UserService extends BaseService<UserEntity> {
  constructor() {
    super();

    this.repository = getRepository(UserEntity);
  }

  async create(data: UserEntity) {
    await this.checkIfUserAlreadyExists(data.email);

    return super.create(data);
  }

  async update(data: UserEntity) {
    await this.checkIfUserAlreadyExists(data.email);

    return super.create(data);
  }

  private async checkIfUserAlreadyExists(email: string): Promise<void> {
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
