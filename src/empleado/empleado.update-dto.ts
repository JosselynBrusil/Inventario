import { IsDate, IsNotEmpty, IsNumberString, IsString, MaxLength, MinLength } from 'class-validator';

export class EmployeeUpdateDto {

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
