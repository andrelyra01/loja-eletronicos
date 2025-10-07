import React from 'react'
import './Footer.css'
import ImgLogoApple from "../../img/LogoAplle.png"


const Footer = () => {
  return (
    <footer className='footer-container'>
        <div className="logo">
            <img src={ImgLogoApple} alt="" />
        </div>
        <div className="footer-itens">
            <ul>
                <li><a href="">Contato</a></li>
                <li><a href="">Localização</a></li>
                <li><a href="">Ajuda</a></li>
                <li><a href="">Trabalhe Conosco</a></li>
             
            </ul>
        </div>
      
    </footer >
  )
}

export default Footer
