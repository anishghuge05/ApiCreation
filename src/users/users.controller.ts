import { Controller, Post, Body, HttpCode, HttpStatus, Get, Param, Delete, Patch } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserResponseDto } from '../dto/user-response.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({
    status: 201,
    description: 'User created successfully',
    type: UserResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Invalid input' })
  @ApiResponse({ status: 409, description: 'User already exists' })
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

@Get(':id')
@HttpCode(HttpStatus.OK)
@ApiOperation({ summary: 'Get user by id' })
@ApiResponse({
  status: 200,
  description: 'User fetched successfully',
  type: UserResponseDto,
})
@ApiResponse({
  status: 404,
  description: 'User not found',
})
async findOne(@Param('id') id: string) {
  return this.usersService.findOne(Number(id));
}




  @Delete(':id')
@HttpCode(HttpStatus.OK)
@ApiOperation({ summary: 'Delete user by id' })
@ApiResponse({
  status: 200,
  description: 'User deleted successfully',
  type: UserResponseDto,
})
@ApiResponse({
  status: 404,
  description: 'User not found',
})
async deleteUser(@Param('id') id: string) {
  return this.usersService.deleteUser(Number(id));
}

 @Patch(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
   try{
      console.log("Id:::",id)
      console.log(updateUserDto);
      return this.usersService.updateUser(Number(id), updateUserDto);
    }
    catch(error){
      console.error('Error in patch',error)
    }
  }
}



