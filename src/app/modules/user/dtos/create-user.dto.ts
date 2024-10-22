import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { RoleTypeEnum } from './../../../shared/enums/role-type.enum';

export class CreateUserDto {
  @ApiProperty({
    type: String,
    required: true,
    description: 'User first name',
    example: 'John',
  })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({
    type: String,
    required: true,
    description: 'User last name',
    example: 'Doe',
  })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    type: String,
    required: true,
    description: 'User email address',
    example: 'john.doe@example.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    type: String,
    required: false,
    description: 'User phone number',
    example: '+1 212-226-3126',
  })
  @IsEmail()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    type: String,
    required: true,
    description: 'User password',
    example: '123456',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    type: String,
    required: true,
    description: 'User role',
    enum: RoleTypeEnum,
    example: RoleTypeEnum.User,
  })
  @IsEnum(RoleTypeEnum)
  @IsNotEmpty()
  role: RoleTypeEnum;

  @ApiProperty({
    type: String,
    required: false,
    description: 'User address',
    example: 'New York, USA',
  })
  @IsString()
  @IsOptional()
  address?: string;
}
