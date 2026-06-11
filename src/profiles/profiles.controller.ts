import {
  Controller,
  Get,
  Query,
  Param,
  Body,
  Post,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

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

  @Put()
  update(@Body() updateProfileDto: UpdateProfileDto, @Query('id') id: string) {
    console.log(
      'put to profiles, query id and updateProfileDto: ',
      id,
      updateProfileDto,
    );
    return {
      name: updateProfileDto.name,
      description: updateProfileDto.description,
    };
  }
  @Put(':id')
  updateWithParam(
    @Body() updateProfileDto: UpdateProfileDto,
    @Param('id') id: string,
  ) {
    console.log(
      'put to profiles/:id, param id and updateProfileDto: ',
      id,
      updateProfileDto,
    );
    return {
      name: updateProfileDto.name,
      description: updateProfileDto.description,
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    console.log('delete to profiles/:id, param id: ', id);
    return {};
  }
}
