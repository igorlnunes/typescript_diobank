import { useContext } from 'react'
import './Header.css'
import { AppContext } from '../AppContext';
import { ButtonCustom } from '../ButtonCustom';
import { useNavigate } from 'react-router-dom';
import { changeLocalStorage } from '../../services/storage';


export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    changeLocalStorage({ login: false, user: '', password: '' })
    setIsLoggedIn(false);
    navigate('/');
  }

  return (
    <div className='header'>
      <div className="logo">
        Dio Bank
      </div>
      {
        isLoggedIn && (
          <ButtonCustom title='Sair' event={() => logout()} />
        )
      }
    </div>
  )
}
