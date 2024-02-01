import { Controller, Get, Param } from '@nestjs/common';
@Controller('auth')
export class AuthController {
  @Get(':id')
  async get(@Param('id') id: string) {}
}
