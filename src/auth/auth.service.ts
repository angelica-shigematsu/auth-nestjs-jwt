import { Injectable } from '@nestjs/common';
import { UserEntity } from '../users/entity/UserEntity';
import { UsersService } from '../users/users.service';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async login(user: UserEntity) {
    const payload = { sub: user.id }

    return {
      token: this.jwtService.sign(payload)
    }
  }

  async validateUser(userName: string, password: string) {
    let user: UserEntity;
     try {
      user = await this.userService.findOneOrFail({ where: { userName: userName }});
      
    } catch (error) {
        return null;
     }
     const isPasswordValid = compareSync(password, user.password);

      if(!isPasswordValid) return null;
     
      return user;
    }
  
}
