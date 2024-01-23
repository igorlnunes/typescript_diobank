import { login } from "./login";
import { api } from './api';

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockEmail = 'igornunes@dio.bank';

    it('Deve exibir um alert com boas vindas caso email seja válido', async () => {
        await login(mockEmail);
        expect(mockAlert).toHaveBeenCalledWith('Bem-vinda igornunes@dio.bank!')
    });
    it('Não deve exibir a mensagem de boas vindas sem o e-mail', async () => {
        await login(mockEmail);
        expect(mockAlert).not.toHaveBeenCalledWith('Bem-vinda!');
    });
    it('Deve exibir um erro caso o email seja inválido', async () => {
        await login('email@invalido.com');
        expect(mockAlert).toHaveBeenCalledWith('E-mail inválido!');
    })
})