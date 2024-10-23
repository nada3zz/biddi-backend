import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class FindVendorDto {
  @ApiProperty({
    type: String,
    required: false,
    description: 'Search Word',
    example: 'adidas',
  })
  @IsOptional()
  @IsString()
  search?: string;
}
