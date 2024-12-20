import React from 'react'
import './privatediningcelebration.scss'
import img1 from '../../../../../assets/image/privatedining-celebration-img-bg.webp'
import img2 from '../../../../../assets/image/privatedining-celebration-img-main.webp'
export default function Privatediningcelebration() {
  return (
    <div>
        <div className='privatedining_celebration_main'>
        <div className='privatedining_celebration_bg'>
          <img src={img1} />
        </div>
        <div className='privatedining_celebration_main_contant'>
          <div className='privatedining_celebration_main_contant_img'>
            <img src={img2} />
          </div>
          <div className='privatedining_celebration_main_contant_text_main'>
            <div className='privatedining_celebration_main_contant_text'>
              <h1>Private dining</h1>
              <h2></h2>
              <p>For an intimate celebration with those who matter most, discover One&Only’s exceptional private dining experiences around the world. From dinner for two on a secluded sandbar to a lavish al fresco affair on the Adriatic Riviera, let our world-renowned chefs share their culinary masterpieces in an extraordinary location, tailored just for you.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
