export interface IAuthForm {
    email: string;
    password: string;
    confirmPassword?: string;
}

export interface IUser {
    id: number;
    name?: string;
    email: string;
}

export interface IAuthResponse {
    accessToken: string;
    user: IUser;
}

export type TypeUserForm = Omit<IUser, 'id'> & { password?: string };
