import { Injectable } from '@nestjs/common'

import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

import { User } from './entities/user.entity'

import { CreateUserDTO } from '~/users/dto/create-user.dto'
import { UpdateUserDTO } from '~/users/dto/update-user.dto'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(createUserDTO: CreateUserDTO) {
    return this.usersRepository.save(createUserDTO)
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find()
  }

  findOne(id: string) {
    return this.usersRepository.findOneBy({ id })
  }

  update(id: string, updateUserDTO: UpdateUserDTO) {
    return this.usersRepository.update({ id }, updateUserDTO)
  }

  remove(id: string) {
    return this.usersRepository.delete({ id })
  }
}
