import { Controller, Get } from '@nestjs/common';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { AnalyticsService } from './analytics.service';

@Controller('user/analytics')
export class AnalyticsController {
    constructor(private readonly analiticsService: AnalyticsService) { }
    @Get()
    @Auth()
    async profile(@CurrentUser('id') userId: string) {
        return this.analiticsService.getAnalitics(userId);
    }
}
