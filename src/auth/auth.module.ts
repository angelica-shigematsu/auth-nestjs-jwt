import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { jwtConstants } from './strategies/constants';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      privateKey: jwtConstants.privatekey,
      signOptions: { expiresIn: '60s'}
    })
  ],
  controllers: [
    AuthController
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy
  ]
}) 
export class AuthModule {}
