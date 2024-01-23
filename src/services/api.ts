const conta = {
  email: 'igornunes@dio.bank',
  password: '123456',
  name: 'Igor Nunes'
}

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 3000);
})