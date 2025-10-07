import React from 'react'
import ImageCardPhone from '../../img/Iphone-Card.jpg'
import ImageCardPhoneMarrom from '../../img/Card-proMax-Marron.jpg'
import './Phone-Card.css'

const CardPhone = () => {
  return (
    <div className='container-card-phone'>
      <img src={ImageCardPhoneMarrom} alt="" />
    </div>
  )
}

export default CardPhone
