import { Injectable } from "@nestjs/common";
import { UnauthorizedException } from "@nestjs/common/exceptions";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-jwt";
import { MESSSAGEHELPER } from "../../users/helpers/message.helper";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, "jwt") {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'userName'});
  }

  async validate(username: string, password: string) {
    const user = await this.authService.validateUser(username, password);
    
    if(!user) throw new UnauthorizedException(MESSSAGEHELPER.PASSOWRD_OR_EMAIL_INVALID); 
    
    return user;
  }
}