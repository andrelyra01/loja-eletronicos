import React from 'react'
import IphoneRoxo from '../../img/iphone-roxo.png'
import IphoneBranco from '../../img/iphone-branco.png'
import IphoneVerde from '../../img/iphone-verde.png'
import './style.css'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'
import CardPhone from '../../Components/CardIphone/CardPhone'
import ButtonPhone from '../../Components/Button/ButtonPhone'
import PhoneCard from '../../Components/Produto-Phone/PhoneCard'

const Telefone = () => {

  useEffect(() =>  {
    ScrollReveal().reveal('.title-secao-1', {
      delay: 500, 
      duration: 1000,
      origin: 'top',
      distance: '100px',
      opacity: 0,
      easing: 'ease-in-out',
      reset: true });
  }, [])



  return (
    <>
    
    
   
    <section className="secao-1">
      <section className="card-iphone-logo">
        <CardPhone />
         
      </section>
    </section>
       <h1 className='title-secao-1'>Linha Pro Max</h1>
    
    <div className='container-telefone'>
      <PhoneCard/>
      <PhoneCard/>
      <PhoneCard/>
      <PhoneCard/>
      <PhoneCard/>
      <PhoneCard/>
      <PhoneCard/>
      <PhoneCard/>
      <PhoneCard/>
      <PhoneCard/>
      <PhoneCard/>
      <PhoneCard/>
    
    </div>
     </>
  )
}

export default Telefone
