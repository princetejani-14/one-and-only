import React from 'react'
import './birthdayscelebration.scss'
import img1 from '../../../../../assets/image/birthdays-celebration-img.webp'
export default function Birthdayscelebration() {
  return (
    <div>
      <div className='container'>
                <div className='birthdays_celebration_main'>
                    <div className='birthdays_celebration_left'>
                        <img src={img1} />
                    </div>
                    <div className='birthdays_celebration_right'>

                        <div className='birthdays_celebration_right_border_top'>
                            <h2></h2>
                        </div>
                        <div className='birthdays_celebration_right_text_data'>
                            <h1>Milestone birthdays</h1>
                           <p>Gather with those you hold dear as you mark another journey around the sun. Cherish time together, as our expert team helps plan treasured celebrations, spectacular culinary experiences, and bespoke adventures in the world’s most remarkable locations.</p>
                        </div>
                        <div className='birthdays_celebration_right_border_bottom'>
                            <h4></h4>
                        </div>

                    </div>
                </div>

            </div>
    </div>
  )
}
