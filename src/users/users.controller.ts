import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { get } from 'http';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService : UsersService){}

  @Get() //users or users?role=value
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.usersService.findAll(role)
  }

  @Get(':id') // users/:id
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post() // users
  create(@Body() user: {name:string,email:string,role: 'INTERN' | 'ENGINEER' | 'ADMIN'}) {
    return this.usersService.create(user)
  }
  @Patch(':id') // users/:id
  update(@Param('id') id: string, @Body() userUpdate: {name?:string,email?:string,role?: 'INTERN' | 'ENGINEER' | 'ADMIN'}) {
    return this.usersService.update(+id, userUpdate);
  }
  @Delete(':id') // users/id
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
