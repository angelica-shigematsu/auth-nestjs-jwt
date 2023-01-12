import { IsNotEmpty } from "class-validator";

export class UpdateUserDto {
  @IsNotEmpty()
  fullName: string;
  @IsNotEmpty()
  birthDate: Date;
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  userName: string;
  @IsNotEmpty()
  photo: string;
}