import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDTO {
  @ApiProperty({ example: 'Jhon Doe' })
  name: string

  @ApiProperty({ example: 'jhon.doe@domain.com' })
  email: string
}
