import React from 'react'
import '../Carrossel/Slider.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import Dev01 from '../../img/developer1.jpg'
import Dev02 from '../../img/developer2.jpg'
import Dev03 from '../../img/developer3.jpg'
import AirDots from '../../img/Airdots2.png'
import CaixaSom from '../../img/caixa-som.png'
import TrioRelogio from '../../img/Applewatcduo.png'
import MackbooHero from '../../img/hero_static.png'
import MacbooNovo from '../../img/Macboo-novo.png'
import RelogioTrio from '../../img/Relogio-novo05.png'
import MackbookPro from '../../img/MacNovo.png'
import MacbokTrabalho from '../../img/Macbook-Trabalho.jpg' 


import {useState , useEffect} from 'react'
import {EffectFade,Navigation,Pagination,Autoplay} from 'swiper/modules'


const Slider = () => {
     const [sliderPerview, setSliderPerview] = useState(2)

 const data = [
       
        {id: '2', image: TrioRelogio},
        {id: '3', image: CaixaSom},
        {id: '4', image: AirDots},
        {id: '5', image: MacbooNovo},

    ]


    useEffect(() =>  {
    const handleResize = () => {
        if(window.innerWidth < 720){
            setSliderPerview(1)
        }else {
            setSliderPerview(2)
        }
    }

    handleResize();

    window.addEventListener("resize", handleResize)

    return () =>  {
        window.removeEventListener("resize", handleResize)
    }

    },[])


  return (
    <div className='container'>

        <div className="container-title">
            <h1 className='title-slider'>Variedade de Produtos</h1>
        </div>
      

        <Swiper

        spaceBetween={sliderPerview}
        slidesPerView={sliderPerview}
        pagination={{clickable: true}}
        navigation={{clickable: true}}
        autoplay={{delay: 3500}}
      


        >
           
         {data.map((item) =>  (
             <SwiperSlide key={item.id}>
                <img 
                src={item.image} 
                alt="Slider" 
                className='slide-item'
                 />
            </SwiperSlide>
         ))}
        </Swiper>
      
    </div>
  )
}

export default Slider
