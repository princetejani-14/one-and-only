import React from 'react'
import './arabianadventures.scss'
import img1 from '../../../../../assets/image/Arabian-adventure-main-img.webp'
export default function Arabianadventures() {
    return (
        <div>
            <div className='arabian_adventures_main'>
                <div className='arabian_adventures_img'>
                    <img src={img1} />
                </div>
                <div className='arabian_adventures_heading'>
                    <h1>An Arabian adventure</h1>
                </div>
                <div className='arabian_adventures_data'>
                    <p>In Dubai, our two incredible resorts, One&Only The Palm and One&Only Royal Mirage are located on the city’s alluring beaches, just a short drive from Dubai’s desert dunes, where the ancient customs of the Middle East’s Bedouin tribes live on. Lose yourself in the charm of this great cosmopolitan city.</p>
                    <button>explore</button>
                </div>


            </div>

        </div>
    )
}
