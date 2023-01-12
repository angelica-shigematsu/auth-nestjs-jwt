import { IsNotEmpty, Matches } from "class-validator";
import { MESSSAGEHELPER } from "../helpers/message.helper";
import { ReGexHelper } from "../helpers/regex.helper";

export class CreateUserDto {
  @IsNotEmpty()
  fullName: string;

  @IsNotEmpty()
  birthDate: Date;

  @IsNotEmpty()
  email: string;
  
  @IsNotEmpty()
  userName: string;

  @IsNotEmpty()
  @Matches(ReGexHelper.password, {
    message: MESSSAGEHELPER.PASSWORD_VALID
  })
  password: string;
  
  @IsNotEmpty()
  photo: string;
}