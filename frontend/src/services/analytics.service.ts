import { axiosWithAuth } from '@/api/interceptors';
import { IAnalytics } from '@/types/analytics.types';

class AnalyticsService {
    private BASE_URL = '/user/analytics';

    async getAnalytics(): Promise<IAnalytics> {
        const response = await axiosWithAuth.get<IAnalytics>(this.BASE_URL);
        return response.data;
    }
}


export const analyticsService = new AnalyticsService()
