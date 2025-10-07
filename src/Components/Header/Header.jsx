import React from 'react'
import {Link} from 'react-router-dom'
import '../../Components/Header/style.css'
import ImgButton from '../../img/menu.png'
import CloseButton from '../../img/close.png'
import LogoApple from '../../img/LogoAplle.png'






const Header = () => {
  
  return (
   <header>
    <nav className="nav-bar">
      <div className="logo">
         
        <img src={LogoApple} alt="" />
      </div>
      <div className="nav-list">
          <ul>
        <li className="nav-item"><Link to="/" className='nav-link'>Home</Link></li>
        <li className="nav-item"><Link to="/relogio"className='nav-link'>Relogios</Link></li>
        <li className="nav-item"><Link to="/aplle"className='nav-link'>Macbook</Link></li>
        <li className="nav-item"><Link to="/telefone"className='nav-link'>Phones</Link></li>
      </ul>
      </div>
      <div className="login-button">
       <button><Link to="/">Entrar</Link></button>
      </div>
      {/* Responsivo */}
      <div className="mobile-menu-icon">
       <Button /><img src={ImgButton} alt="" className='icon' />
      </div>
    </nav>

    <div className="mobile-menu">
      <ul>
        <li className="nav-item"><Link to="/" className='nav-link'>Home</Link></li>
        <li className="nav-item"><Link to="/relogio"className='nav-link'>Relogios</Link></li>
        <li className="nav-item"><Link to="/aplle"className='nav-link'>Macbook</Link></li>
        <li className="nav-item"><Link to="/telefone"className='nav-link'>Phones</Link></li>
      </ul>
        <div className="login-button">
           <Button /><img src={CloseButton} alt="" />
      </div>
    </div>
   </header>
  )
}

export default Header
