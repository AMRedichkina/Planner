import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { SettingsDto } from './dto/settings.dto';


@Injectable()
export class SettingsService {
    constructor(private prisma: PrismaService) { }

    async getSettings(userId: string) {
        const settings = await this.prisma.settings.findUnique({
            where: { userId },
            select: {
                workInterval: true,
                breakInterval: true,
                intervalCount: true
            }
        });
        if (!settings) {
            throw new NotFoundException('Settings for user not found')
        }

        return {
            settings
        }
    }


    async updateSettings(userId: string, settingsDTO: SettingsDto) {
        let data = settingsDTO;

        return this.prisma.settings.update({
            where: { userId },
            data,
            select: {
                workInterval: true,
                breakInterval: true,
                intervalCount: true
            }
        })
    }
}
