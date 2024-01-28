import { api } from './api';

export const login = async (email: string): Promise<Boolean> => {
    const data: any = await api;

    if (email !== data.email) {
        return false;
    }

    return true;
}
