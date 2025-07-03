import { PartialType } from '@nestjs/swagger'

import { CreateUserDTO } from '~/users/dto/create-user.dto'

export class UpdateUserDTO extends PartialType(CreateUserDTO) {}
