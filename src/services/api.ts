const conta = {
  email: 'igornunes@dio.bank',
  password: '123456',
  name: 'Igor Nunes',
  balance: 2000.00,
  id: '1'
}

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 3000);
})