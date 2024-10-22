import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BaseService } from '../../shared/services/base.service';

import { CreateUserDto } from './dtos/create-user.dto';
import { UserRepository } from './repository/user.repository';
import { UserDocument } from './models/user.entity';

@Injectable()
export class UserService extends BaseService<UserDocument, UserRepository> {
  constructor(
    protected readonly repository: UserRepository,
  ) {
    super();
  }

  async create(userDto: CreateUserDto): Promise<UserDocument> {
    const user = await this.repository.create(userDto);

    return user;
  }

  async getUserDetails(userId: string): Promise<UserDocument> {
    const user = await this.repository.findById(userId);

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    user.password = undefined;

    return user;
  }

  async deleteUserDetails(userId: string): Promise<UserDocument> {
    const user = await this.repository.deleteById(userId);

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return user;
  }

}
