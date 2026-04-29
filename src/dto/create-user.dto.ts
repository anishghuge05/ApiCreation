import { IsEmail, IsOptional, IsString ,MinLength,IsNotEmpty, IsInt, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'john@example.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string ;

  @ApiProperty({ example: 'John Doe', required: false })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
   @MinLength(3)
  name?: string;

  @ApiProperty({ example: 'Password@123' })
  @IsString()
   @IsOptional()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

   @ApiProperty({ example: 25 })
  @IsInt()
  @Min(1)
  @Max(120)
  age?: number;
}