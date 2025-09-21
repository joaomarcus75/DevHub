import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'João', description: 'Nome do usuário' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'joao@test.com', description: 'Email do usuário' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '123456', description: 'Senha do usuário' })
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
