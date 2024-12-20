import React from 'react'
import './adventuresfamily.scss'
import img1 from '../../../../../assets/image/adventures-family-img-left.webp'
import img2 from '../../../../../assets/image/adventures-family-img-right.webp'
export default function Adventuresfamily() {
  return (
    <div>
      <div className='container'>
                <div className='adventures_family_main'>
                    <div className='adventures_family_left'>
                        <img src={img1} />
                    </div>
                    <div className='adventures_family_right'>
                        <img src={img2} />
                        <h1>Adventures await</h1>
                        <p>Marvel at the dolphins in Mauritius and the Maldives, or be entranced by whales in Cape Town and Mexico. Embrace Arabian charm as you drive deep into Dubai’s desert, and play to your heart’s content in One&Only’s collection of swimming pools and pristine beaches.</p>
                        <h6>explore</h6>
                    </div>

                </div>

            </div>
    </div>
  )
}
