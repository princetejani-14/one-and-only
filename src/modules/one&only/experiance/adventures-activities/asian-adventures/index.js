import React from 'react'
import './asianadventures.scss'
import img1 from '../../../../../assets/image/asian-bg.webp'
import img2 from '../../../../../assets/image/asian-main-img.webp'
export default function Asianadventures() {
    return (
        <div>
            <div className='asian_adventures_parent'>
                <div className='asian_adventures_bg'>
                    <img src={img1} />
                </div>
                <div className='asian_adventures_main'>
                    <div className='asian_adventures_left'>
                        <img src={img2} />
                    </div>
                    <div className='asian_adventures_right'>
                        <div className='asian_adventures_right_text'>
                            <h1>Alluring Asian traditions</h1>
                            <h2></h2>
                            <p>Feel at one with the authentic spirit of Malaysia and explore the evolution of the arts through the ‘Warriors Journey’ at the UNESCO-listed Silat Melayu. Experience practice rooted in local folklore and preserved only through oral traditions at One&Only Desaru Coast.</p>
                            <button>explore</button>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
