import { IsEmail, IsString, MinLength } from 'class-validator';

export class User {
    @IsString()
    public userName: string;

    @IsEmail()
    public email: string;

    @IsString()
    @MinLength(8)
    public password: string;
}