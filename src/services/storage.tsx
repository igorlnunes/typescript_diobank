interface IDioBank {
  login: boolean,
  user: string,
  password: string
}

const diobank = {
  login: false,
  user: '',
  password: ''
}

export const getAllLocalStorage = (): string | null => {
  return localStorage.getItem('diobank');
}

export const createLocalStorage = (): void => {
  return localStorage.setItem('diobank', JSON.stringify(diobank))
}

export const changeLocalStorage = (_diobank: IDioBank): void => {
  localStorage.setItem('diobank', JSON.stringify(_diobank));
}