import { login } from "./login";

describe('login', () => {
    const mockEmail = 'igornunes@dio.bank';
    const mockPassword = '123456';

    it('Deve retornar true se email e senha válidos', async () => {
        const response = await login(mockEmail, mockPassword);
        expect(response).toBeTruthy();
    });
    it('Deve retornar false se senha inválida', async () => {
        const response = await login(mockEmail, '12345');
        expect(response).toBeFalsy();
    });
    it('Deve retornar false se email inválido', async () => {
        const response = await login('invalido@email.com', mockPassword);
        expect(response).toBeFalsy();
    });
})