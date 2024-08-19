import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSubscribeDto {
  @ApiProperty({ description: 'Nome a ser adicionado', required: true })
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  @IsString({ message: 'Nome deve ser uma string' })
  @MinLength(2, { message: 'Nome deve ter pelo menos 2 caracteres' })
  name: string;

  @ApiProperty({ description: 'Email a ser adicionado', required: true })
  @IsNotEmpty({ message: 'Email não pode ser vazio' })
  @IsString({ message: 'Email deve ser uma string' })
  @IsEmail(undefined, { message: 'Forneça um email válido' })
  email: string;

  @ApiProperty({ description: 'Telefone a ser adicionado', required: true })
  @IsNotEmpty({ message: 'Telefone não pode ser vazio' })
  @IsString({ message: 'Forneça um telefone válido' })
  @Length(11, 11, { message: 'Telefone deve ter 11 números' })
  phone: string;

  @ApiProperty({
    description: 'Nome da empresa a ser adicionado',
    required: true,
  })
  @IsNotEmpty({ message: 'Empresa não pode ser vazio' })
  @IsString({ message: 'Empresa deve ser uma string' })
  @MinLength(2, { message: 'Empresa deve ter pelo menos 2 caracteres' })
  company: string;
}
