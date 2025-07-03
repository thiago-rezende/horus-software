import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'

import { UsersService } from '~/users/users.service'

import { CreateUserDTO } from '~/users/dto/create-user.dto'
import { UpdateUserDTO } from '~/users/dto/update-user.dto'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDTO: CreateUserDTO) {
    const user = await this.usersService.create(createUserDTO)

    return { user }
  }

  @Get()
  async findAll() {
    const users = await this.usersService.findAll()

    return { users }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOne(id)

    return { user }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDTO: UpdateUserDTO) {
    await this.usersService.update(id, updateUserDTO)
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.usersService.remove(id)
  }
}
