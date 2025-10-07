import React from 'react'
import './style.css'
import Macbook from '../../img/laptop.jpg'
import Macbook02 from '../../img/Macboo-novo.png'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'
import Card from '../../components/CardLoja/Card'
import MacCard from '../../Components/MacCard/MacCard'
import Macbookpc from '../../img/pc-macbook.png'
import Macbookgray from '../../img/macbookgray.png'


const Macs = () => {

   useEffect(() =>  {
    ScrollReveal().reveal('.macs-title', {
      delay: 500, 
      duration: 1500,
      origin: 'left',
      distance: '300px',
      opacity: 0,
      scale: 0.5,
     
      reset: true });
  }, [])



  return (

    <>
    
     <div>
      <MacCard/>
        <h1 className='macs-title title-macs'> Macbooks</h1>
      </div>
    <div className='container-macs'>
        <div className='macbook-container'>
          <img className='macbook' src={Macbookpc} alt="" />
          <div className="preco">
            <h1>Macbook Air Novo </h1>
            <p>Preços Imbativeis Pesquise no Nosso Site</p>
            <button className='btn'>Comprar</button>
          </div>
     </div>
        <div className='macbook-container'>
          <img className='macbook' src={Macbookpc} alt="" />
          <div className="preco">
            <h1>Macbook Air Novo </h1>
            <p>Preços Imbativeis Pesquise no Nosso Site</p>
            <button className='btn'>Comprar</button>
          </div>
     </div>
        <div className='macbook-container'>
          <img className='macbook' src={Macbookpc} alt="" />
          <div className="preco">
            <h1>Macbook Air Novo </h1>
            <p>Preços Imbativeis Pesquise no Nosso Site</p>
            <button className='btn'>Comprar</button>
          </div>
     </div>
     <div className='macbook-container'>
          <img className='macbook' src={Macbookpc} alt="" />
          <div className="preco">
            <h1>Macbook Air Novo </h1>
            <p>Preços Imbativeis Pesquise no Nosso Site</p>
            <button className='btn'>Comprar</button>
          </div>
     </div>
    </div>
    
    </>
     
  )
}

export default Macs
