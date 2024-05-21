import { axiosWithAuth } from '@/api/interceptors';
import { IUser, TypeUserForm } from '@/types/auth.types';


class UserService {
    private BASE_URL = '/user/profile'

    async get(): Promise<IUser> {
        const response = await axiosWithAuth.get(this.BASE_URL)
        console.log(response.data)
        return response.data
    }

    async update(data: TypeUserForm): Promise<IUser> {
        const response = await axiosWithAuth.put(this.BASE_URL, data)
        return response.data
    }
}

export const userService = new UserService();