import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateVendorDto {
  @ApiProperty({
    type: String,
    required: true,
    description: 'Name of the vendor',
    example: 'Nike',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    type: String,
    required: true,
    description: 'Code of the vendor',
    example: 'nike',
  })
  @IsString()
  @IsNotEmpty()
  code: string;

  @ApiProperty({
    type: String,
    required: true,
    description: 'Description of the vendor',
    example:
      'Nike is the world’s leading innovator in athletic footwear, apparel, equipment and accessories.',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    type: String,
    required: false,
    description: 'Vendor phone number',
    example: '+1 212-226-3126',
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    type: String,
    required: false,
    description: 'Vendor phone number',
    example: '+1 212-226-3126',
  })
  @IsString()
  logo: string;

  @ApiProperty({
    type: String,
    required: true,
    description: 'Vendor address',
    example: 'Cairo, Egypt',
  })
  @IsString()
  address: string;

}
