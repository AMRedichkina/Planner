import { AxiosResponse } from 'axios';
import { axiosNoAuth } from '@/api/interceptors';
import { removeFromStorage, saveTokenStorage } from './auth-token.service';
import { IAuthForm, IAuthResponse } from '@/types/auth.types';

class AuthService {
    async main(type: 'login' | 'register', data: IAuthForm): Promise<IAuthResponse> {
        console.log(`AuthService.main called with type: ${type} and data:`, data);
        const response: AxiosResponse<IAuthResponse> = await axiosNoAuth.post<IAuthResponse>(`/auth/${type}`, data);

        if (response.data.accessToken) {
            saveTokenStorage(response.data.accessToken);
        }

        return response.data;
    }

    async getNewTokens(): Promise<IAuthResponse> {
        const response: AxiosResponse<IAuthResponse> = await axiosNoAuth.post<IAuthResponse>('/auth/login/access-token');

        if (response.data.accessToken) {
            saveTokenStorage(response.data.accessToken);
        }

        return response.data;
    }

    async logout(): Promise<boolean> {
        const response: AxiosResponse<boolean> = await axiosNoAuth.post<boolean>('auth/logout');

        if (response.data) {
            removeFromStorage();
        }

        return response.data;
    }
}

export const authService = new AuthService()
