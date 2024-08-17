import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  MinLength,
} from 'class-validator';
import { Subscribed } from '../entities/subscribed.entity';

export class CreateSubscribeDto extends Subscribed {
  @IsNotEmpty({ message: 'Name must not be empty' })
  @IsString({ message: 'Name must be string' })
  @MinLength(2, { message: 'Name must have at least 2 characters' })
  name: string;

  @IsNotEmpty({ message: 'Email must not be empty' })
  @IsString({ message: 'Email must be string' })
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'Phone must not be empty' })
  @IsString({ message: 'Please provide a valid phone number' })
  @Length(11, 11, { message: 'Phone must have characters 11' })
  phone: string;

  @IsNotEmpty({ message: 'Company name must not be empty' })
  @IsString({ message: 'Company name must be string' })
  @MinLength(2, { message: 'Company name must have at least 2 characters' })
  company: string;
}
