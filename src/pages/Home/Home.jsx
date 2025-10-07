import React from 'react'
import '../Home/style.css'
import FotoTelas from '../../img/Appletelas.png'
import Slider from '../../Components/Carrossel/Slider'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'
import Card from '../../Components/CardLoja/Card'


const Home = () => {

  useEffect(() =>  {
    ScrollReveal().reveal('.title-escolha', 
      { delay: 400, 
        duration: 2000, 
        origin: 'left',
         distance: '300px',
          easing: 'ease-in-out',
           reset: true });
  }, [])


  return (
    <div className='container-home'>
      <Card/>
      <div className="container-parallax">
         <div className="title-home">
        <h1 className='title-escolha'>Sua Loja de Eletronicos</h1>
      </div>

      </div>
      <div className="container-parallax-2">
         <div className="title-home">
        <h1 className='title-escolha-2'>Melhores Produtos</h1>
      </div>

      </div>
     

      <div className="container-slider">
          <Slider/>
      </div>

    

        <section className="secao-2">
            <div className="title-dispositivos">
        <h3>Varios Tipos de Telas</h3>
      </div>
             <img src={FotoTelas} alt="" />
             <div className="text-telas">
               <h2>Todos os Tipos de Dispositivos</h2>
                <p>Melhores opções Aqui </p>
             </div>
        </section>
    
    </div>
  )
}

export default Home
