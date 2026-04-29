import { IsEmail, IsInt, IsOptional, IsString, Max, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({ example: 'john@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'John Doe', required: false })
  @IsOptional()
  @IsString()
  name?: string; 

  @IsString()
   @IsOptional()
    password: string; 

  
  @IsInt()
  @Min(1)
  @Max(120)
  age: number;
}