import React from 'react'
import FotoSede from '../../img/Sede-novo.jpg'
import '../CardLoja/CardStyle.css'

const Card = () => {
  return (
      <section className="secao-1">
               <img className='sede' src={FotoSede} alt="" />
   
           </section>
  )
}

export default Card
