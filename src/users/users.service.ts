import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUserDto';
import { UserEntity } from './entity/UserEntity'
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>
  ) {}

  async createUser(data: CreateUserDto): Promise<UserEntity> {
    const user = this.usersRepository.create(data);
    await this.usersRepository.save(user);

    return user;
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return await this.usersRepository.find();
  }

  async getUser(id: string): Promise<UserEntity>{
    return await this.usersRepository.findOne({ where: { id: id}});
  }

  async updateUser(id: string, data: UpdateUserDto): Promise<UserEntity> {
    const user = await this.usersRepository.findOneOrFail({ where: { id: id }});
    this.usersRepository.merge(user, data);
    return this.usersRepository.save(user);
  }

  deleteUser(id: string) {
    return this.usersRepository.delete(id);
  }

}
