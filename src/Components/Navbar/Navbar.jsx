import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import '../Navbar/Navbar.css'
import {useState,useEffect} from 'react'
import LogoApple from '../../img/LogoAplle.png'
import {CarFrontFill, CartFill} from 'react-bootstrap-icons'





const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);

        
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [])
  return (

    <nav className={scrolled ? 'header-scrolled' : 'header-transparent'}>
       
            <Link to="/" className='title'>
            <img src={LogoApple} alt="" />
            </Link>
        
        <div className="menu" onClick={() => {
            setMenuOpen(!menuOpen)
        }}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/relogio">Relogios</NavLink></li>
            <li><NavLink to="/macbook">Macbook</NavLink></li>
            <li><NavLink to="/telefone">Phones</NavLink></li>
        </ul>
            <CartFill className='cart-icon'/>
           
      

       
           
      
    </nav>
  )
}

export default Navbar
