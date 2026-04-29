import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty({ required: false, nullable: true })
  name: string | null;

   @ApiProperty()
   age:number;

}