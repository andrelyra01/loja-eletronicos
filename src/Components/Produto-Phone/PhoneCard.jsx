
import React from 'react'
import IphoneRoxo from '../../img/iphone-roxo.png'
import './Produto-Phone.css'
import ButtonPhone from '../../Components/Button/ButtonPhone'

const PhoneCard = () => {
  return (

    <>
    <div className="container-phone">
        
        <div className='item-phone'>
           <img src={IphoneRoxo} alt="" />
         <div className="price-phone">
             <p>Iphone Roxo Pro Max 256Gb</p>
             <span>R$ 7899,00</span>
              <ButtonPhone/>
        
         </div>
        </div>
    </div>
    
    
    </>
  
  )
}

export default PhoneCard
