import { Injectable } from '@nestjs/common';
import { startOfDay, subDays } from 'date-fns';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AnalyticsService {
    constructor(private prisma: PrismaService) { }

    async getAnalitics(userId: string) {
        const totalTasks = await this.prisma.task.count({
            where: {
                userId
            }
        });
        const completedTasks = await this.prisma.task.count({
            where: {
                userId,
                isCompleted: true
            }
        });

        const todayStart = startOfDay(new Date());
        const weekStart = startOfDay(subDays(new Date(), 7));

        const todayTasks = await this.prisma.task.count({
            where: {
                userId,
                createdAt: {
                    gte: todayStart.toISOString()
                }
            }
        })
        const weekTasks = await this.prisma.task.count({
            where: {
                userId,
                createdAt: {
                    gte: weekStart.toISOString()
                }
            }
        })

        return {
            analytics: [
                { label: 'Total', value: totalTasks },
                { label: 'Completed tasks', value: completedTasks },
                { label: 'Today tasks', value: todayTasks },
                { label: 'Week tasks', value: weekTasks },

            ]
        }
    }
}