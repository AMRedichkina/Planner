import { axiosWithAuth } from '@/api/interceptors';
import { ISettings } from '../types/settings.types';


class SettingsService {
    private BASE_URL = '/user/settings';

    async getSettings(): Promise<ISettings> {
        const response = await axiosWithAuth.get<ISettings>(this.BASE_URL);
        return response.data;
    }

    async updateSettings(data: ISettings): Promise<ISettings> {
        const response = await axiosWithAuth.put(this.BASE_URL, data)
        return response.data
    }
}


export const settingsService = new SettingsService()
