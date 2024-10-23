import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiBody,
  ApiQuery,
  ApiParam,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiUnauthorizedResponse,
  ApiForbiddenResponse,
} from '@nestjs/swagger';
import { CreateVendorDto } from './dtos/create-vendor.dto';
import { FindVendorDto } from './dtos/find-vendor.dto';
import { UpdateVendorDto } from './dtos/update-vendor.dto';
import { VendorService } from './vendor.service';

@ApiTags('Vendors')
@Controller('vendors')
export class VendorController {
  constructor(private readonly service: VendorService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new vendor' })
  @ApiCreatedResponse({ description: 'The vendor has been successfully created.' })
  @ApiBadRequestResponse({ description: 'Bad request.' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized.' })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiBody({ type: CreateVendorDto })
  create(@Body() data: CreateVendorDto) {
    return this.service.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Get all Vendors' })
  @ApiOkResponse({ description: 'A list of Vendors has been retrieved successfully.' })
  @ApiQuery({ name: 'q', type: FindVendorDto, required: false })
  findAll(@Query() q: FindVendorDto) {
    return this.service.findPaginated((<any>q).filter, {
      ...(<any>q).options,
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a Vendor by ID' })
  @ApiOkResponse({ description: 'The Vendor has been retrieved successfully.' })
  @ApiNotFoundResponse({ description: 'Vendor not found.' })
  @ApiParam({ name: 'id', type: String, description: 'Vendor ID' })
  findById(@Param('id') id: string) {
    return this.service.findById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a Vendor by ID' })
  @ApiOkResponse({ description: 'The Vendor has been updated successfully.' })
  @ApiBadRequestResponse({ description: 'Bad request.' })
  @ApiNotFoundResponse({ description: 'Vendor not found.' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized.' })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiParam({ name: 'id', type: String, description: 'Vendor ID' })
  @ApiBody({ type: UpdateVendorDto })
  updateById(@Param('id') id: string, @Body() data: UpdateVendorDto) {
    return this.service.updateById(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a Vendor by ID' })
  @ApiOkResponse({ description: 'The Vendor has been deleted successfully.' })
  @ApiNotFoundResponse({ description: 'Vendor not found.' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized.' })
  @ApiForbiddenResponse({ description: 'Forbidden.' })
  @ApiParam({ name: 'id', type: String, description: 'Vendor ID' })
  deleteById(@Param('id') id: string) {
    return this.service.deleteById(id);
  }
}
