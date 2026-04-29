import { Injectable, ConflictException } from '@nestjs/common';
import {  NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: createUserDto.email },
    });

    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    return this.prisma.user.create({
      data: createUserDto,
    });
  }


async findOne(id: number) {
  const user = await this.prisma.user.findUnique({
    where: { id },
  });

  if (!user) {
    throw new NotFoundException(`User with id ${id} not found`);
  }

  return user;
}

async deleteUser(id: number) {
  return this.prisma.user.delete({
    where: { id },
  });
}

async updateUser(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

}
