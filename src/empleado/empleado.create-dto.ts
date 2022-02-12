import { IsDate, IsEmail, IsNotEmpty, IsNumberString, IsString, MaxLength, MinLength } from 'class-validator';

export class EmployeeCreateDto {

    @IsNotEmpty()
    @IsNumberString()
    @MinLength(10)
    @MaxLength(10)
    identify: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(20)
    name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(20)
    lastName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsDate()
    birthday: Date;
    
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    address: string;

    @IsNotEmpty()
    @IsNumberString()
    @MinLength(10)
    @MaxLength(10)
    phone: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    statusV: string;

}
