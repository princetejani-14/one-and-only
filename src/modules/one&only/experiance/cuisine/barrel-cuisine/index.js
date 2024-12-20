import React from 'react'
import './barrelcuisine.scss'
import img1 from '../../../../../assets/image/barrel-cuisine-bg-img.webp'
import img2 from '../../../../../assets/image/barrel-cuisine-main-img.webp'
export default function Barrelcuisine() {
  return (
    <div>
      <div className='barrel_cuisine_main'>
        <div className='barrel_cuisine_bg'>
          <img src={img1} />
        </div>
        <div className='barrel_cuisine_main_contant'>
          <div className='barrel_cuisine_main_contant_img'>
            <img src={img2} />
          </div>
          <div className='barrel_cuisine_main_contant_text_main'>
            <div className='barrel_cuisine_main_contant_text'>
              <h1>Taste from the barrel</h1>
              <h2></h2>
              <p>“Wine cannot just be about taste, colour and texture. It must also tell a story and the sommelier needs to be that storyteller.”</p>
              <h3>- Luvo Ntezo, Head Sommelier at One&Only Cape Town</h3>
              <button>explore</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
