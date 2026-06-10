import { Controller, Get, Query, Param, Body, Post } from '@nestjs/common';
import { CreateProfileDto } from './create-profile.dto';

@Controller('profiles')
export class ProfilesController {
  @Get()
  findAll(@Query('age') age: number) {
    console.log(age);
    return { age };
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Query('age') age: number) {
    console.log('param with query: ', age);
    console.log('param with id: ', id);
    return {
      id,
      age,
    };
  }

  @Post()
  create(@Body() createProfileDto: CreateProfileDto) {
    console.log('post to profiles, createProfileDto: ', createProfileDto);
    return {
      name: createProfileDto.name,
      description: createProfileDto.description,
    };
  }
}
