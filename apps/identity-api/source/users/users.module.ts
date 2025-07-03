import { Module } from '@nestjs/common'

import { TypeOrmModule } from '@nestjs/typeorm'

import { UsersService } from '~/users/users.service'

import { UsersController } from '~/users/users.controller'

import { User } from '~/users/entities/user.entity'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
