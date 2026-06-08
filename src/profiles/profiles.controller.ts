import { Controller, Get, Query, Param } from '@nestjs/common';

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
}
