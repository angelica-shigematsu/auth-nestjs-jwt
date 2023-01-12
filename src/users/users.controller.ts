import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUserDto';
import { UserEntity } from './entity/UserEntity';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findAll(): Promise<UserEntity[]> {
   return await this.usersService.getAllUsers();
  }

  @Post()
  async create(@Body() body: CreateUserDto) {
    return await this.usersService.createUser(body);
  }

  @Post('/:id')
  async findOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.usersService.getUser(id);
  }

  @Put('/:id')
  async update(@Param('id', new ParseUUIDPipe()) id: string,
    @Body() dataUpdated: UpdateUserDto) {
    return await this.usersService.updateUser(id, dataUpdated);
}
  @Delete('/:id')
  delete(@Param() id: string) {
    return this.usersService.deleteUser(id);
  }
}
