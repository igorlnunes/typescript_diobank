import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Conta from './pages/Conta'
import ContaInfo from './pages/ContaInfo'
import { AppContext } from './components/AppContext'
import { useContext } from 'react'

const MainRoutes = () => {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <Routes>
      <Route path='/' element={isLoggedIn ? <Conta /> : <Home />} />
      <Route path='/conta/:id' element={isLoggedIn ? <Conta /> : <Home />} />
      <Route path='/infoconta' element={isLoggedIn ? <ContaInfo /> : <Home />} />
    </Routes>
  )
}

export default MainRoutes