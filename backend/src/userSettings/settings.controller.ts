import { Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { SettingsDto } from './dto/settings.dto';
import { Body, Get, Put, HttpCode } from '@nestjs/common'

@Controller('user/settings')
export class SettingsController {
    constructor(private readonly settingsService: SettingsService) { }

    @Get()
    @Auth()
    async settings(@CurrentUser('id') userId: string) {
        return this.settingsService.getSettings(userId);
    }

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Put()
    @Auth()
    async updateSettings(@CurrentUser('id') userId: string, @Body() settingsDTO: SettingsDto) {
        return this.settingsService.updateSettings(userId, settingsDTO);
    }
}
