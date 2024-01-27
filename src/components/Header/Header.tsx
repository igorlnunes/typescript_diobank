import { useContext } from 'react'
import './Header.css'
import { AppContext } from '../AppContext';


export const Header = () => {
  const context = useContext(AppContext)
  console.log("Retorno do Header: ", context);
  return (
    <div className='header'>
      <div className="logo">
        Dio Bank
      </div>
    </div>
  )
}
