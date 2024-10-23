import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
  ApiBadRequestResponse,
} from '@nestjs/swagger';

import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserService } from './user.service';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create User' })
  @ApiBody({ type: CreateUserDto, description: 'User Data' })
  @ApiCreatedResponse({ description: 'User has been successfully created.' })
  @ApiBadRequestResponse({ description: 'Bad Request.' })
  async create(@Body() data: CreateUserDto) {
    return this.service.create(data);
  }

  @Get('me')
  @ApiOperation({ summary: 'Get Authenticated User Details' })
  @ApiOkResponse({
    description: 'Successfully fetched user details.',
  })
  async getUserDetails(user: any) {
    return this.service.getUserDetails(user._id);
  }



  @Delete('me')
  @ApiOperation({ summary: 'Delete Authenticated User Details' })
  @ApiOkResponse({
    description: 'Successfully deleted user details.',
  })
  async deleteUserDetails(user: any) {
    return this.service.deleteUserDetails(user._id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get User Details' })
  @ApiOkResponse({
    description: 'Successfully fetched user details.',
  })
  
  async getUser( @Param('id') id: string) {
    return this.service.getUserDetails(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update User by ID' })
  @ApiBody({ type: UpdateUserDto, description: 'New User Data' })
  @ApiParam({ name: 'id', type: 'string', description: 'User ID' })
  @ApiOkResponse({ description: 'User has been successfully updated.' })
  @ApiNotFoundResponse({ description: 'User not found.' })
  async updateById(@Param('id') id: string, @Body() data: UpdateUserDto) {
    return this.service.updateById(id, data);
  }
}
