import React from 'react'
import ImgCardRelogio from '../../img/Fundo-Eletronica.jpg'
import ImgCardAppleWatch from '../../img/apple-watch-series.jpg'

import './RelogioCard.css'

const CardRelogio = () => {
  return (
    <section className='container-card-relogio'>
      <img className='card-relogio'src={ImgCardAppleWatch} alt="" />
    </section>
  )
}

export default CardRelogio
