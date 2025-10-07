
import React from 'react'
import Relogio from '../../img/Relogio-novo.png'
import RelogioTrio from '../../img/Relogio-novo01.png'
import Relogio02 from '../../img/Relogio-novo02.png'
import Relogio03 from '../../img/Relogio-novo3.png'
import Relogio04 from '../../img/apple-watch-graypng.png'
import RelogioTri from '../../img/Relogio-novo05.png'
import RelogiosDuos from '../../img/AppleWatcduo.png'
import RelogioUltraBlue from '../../img/Watch02-colorido.png'

import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useLayoutEffect,useRef } from 'react'
import '../Relogios/Relogios.css'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'

import Whatchs from '../../Components/WatchCard/Whatchs'
import CardRelogio from '../../Components/CardRelogio/CardRelogio'


const Relogios = () => {

  useEffect(() =>  {
    ScrollReveal().reveal('.title-trio', {
      delay: 500, 
      duration: 1500,
      origin: 'left',
      distance: '300px',
      opacity: 0,
      scale: 0.5,
     
      reset: true });
  }, [])


    const el = useRef();
    const tl = useRef();  

  useLayoutEffect(() =>   {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".relogio", {
      x:0,
      opacity: 1,
      rotate: "0deg",
     
      scrollTrigger: {
        trigger: ".items",
        // markers: true,

        start: "top 700px",
        end: "bottom 250px",
        duration: 5,
        scrub: true

      }
    })

    return () => {
      gsap.killTweensOf(".relogio")
    }


  },[])


  return (
    <>
    <CardRelogio/>
   <div className="container">
     <div className="title-trio title-trio-01">
        <h1>Apple Watch</h1>
      </div>

      <div className="secao-ultra">
        <div className="img-ultra">
          <img src={RelogioUltraBlue} alt="" />
        </div>
      </div>


       <section className="items">
        <div className="items-content">
          <img className='relogio' src={Relogio} alt="" />
        </div>
      </section>
        <Whatchs/>
     
           
        <section className="items-trio">
            <img className='trio-relogio' src={RelogioTri} alt="" />
        </section>
      
        <section className="items-duo">
            <img className='duo-relogio' src={RelogiosDuos} alt="" />
        </section>
      
     
     

        <section className="models-container">
          <h1 className=' title-trio title-trio-02'>Qual Apple Whatch Ideal Para Voçe ?</h1>
        <div className="models-content" ref={el}>
          <div className="models-item-01" id='model-1'>
            <img src={Relogio04} alt="relogio preto" />
            <span className="models-tag">Novo</span>
            <h4 className="models-title">Apple Watch SE</h4>
            <p className="models-description">A Partir de <strong>R$ 3.999</strong></p>
            </div>
          <div className="models-item-02" id='model-2' >
            <img src={Relogio04} alt="" />
             <span className="models-tag">Novo</span>
            <h4 className="models-title">Apple Watch SE</h4>
            <p className="models-description">A Partir de <strong>R$ 3.999</strong></p>
            </div>
          <div className="models-item-03" id='model-3' >
            <img src={Relogio04} alt="" />
             <span className="models-tag">Novo</span>
            <h4 className="models-title">Apple Watch SE</h4>
            <p className="models-description">A Partir de <strong>R$ 3.999</strong></p>
            </div>
          </div>
        </section>

          <section className="items-duo">
            <img className='duo-relogio' src={RelogiosDuos} alt="" />
        </section>
      
   </div>


    </>
  )
}

export default Relogios
