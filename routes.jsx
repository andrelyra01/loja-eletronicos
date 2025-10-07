import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './src/pages/Home/Home'
import Relogios from './src/pages/Relogios/Relogios'
import Macs from './src/pages/Macbooks/Macs'
import Telefone from './src/pages/Telefones/Telefone'
import Navbar from './src/Components/Navbar/Navbar'
import Footer from './src/Components/Footer/Footer'


const RoutesApp = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/relogio' element={<Relogios/>}/>
      <Route path='/macbook' element={<Macs/>}/>
      <Route path='/telefone' element={<Telefone/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default RoutesApp
