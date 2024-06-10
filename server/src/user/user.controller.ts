import { Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { UserDto } from './dto/user.dto';
import { Body, Get, Put, HttpCode } from '@nestjs/common'

@Controller('user/profile')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Get()
  @Auth()
  async getProfile(@CurrentUser('id') id: string) {
    return this.userService.getUser(id);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put()
  @Auth()
  async updateProfile(@CurrentUser('id') id: string, @Body() dto: UserDto) {
    return this.userService.update(id, dto);
  }
}
