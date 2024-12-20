import React from 'react'
import './yourtimevillas.scss'
import img1 from '../../../../../assets/image/yourtime-villas-img.webp'
export default function Yourtimevillas() {
  return (
    <div>
      <div className='container'>
                <div className='yourtime_villas_main'>
                    <div className='yourtime_villas_left'>
                        <img src={img1} />
                    </div>
                    <div className='yourtime_villas_right'>
            
                            <div className='yourtime_villas_right_border_top'>
                                <h2></h2>
                            </div>
                            <div className='yourtime_villas_right_text_data'>
                                <h1>Your Time, Uninterrupted</h1>
                                <p>Experience true warmth with One&Only’s iconic personalised host service. Allow your One&Only private host to take care of your every need, from our welcoming unpacking service to our signature nightly turn-down.</p>
                            </div>
                            <div className='yourtime_villas_right_border_bottom'>
                                <h4></h4>
                            </div>
                        
                    </div>
                </div>

            </div>
    </div>
  )
}
