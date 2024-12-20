import React from 'react'
import './incentivescelebration.scss'
import img1 from '../../../../../assets/image/incentives-celebration-img.webp'
export default function Incentivescelebration() {
    return (
        <div>
            <div className='incentives_celebration_bg'>
            <div className='container'>
                <div className='incentives_celebration_main'>
                    <div className='incentives_celebration_left'>
                        <img src={img1} />
                    </div>
                    <div className='incentives_celebration_right'>

                        <div className='incentives_celebration_right_border_top'>
                            <h2></h2>
                        </div>
                        <div className='incentives_celebration_right_text_data'>
                            <h1>Meetings & incentives</h1>
                            <p>Host impactful meetings, elevated conferences and unforgettable incentive trips with One&Only. From nautical playgrounds and nature retreats to city stays at the centre of everything, discover the perfect location for mixing business with pleasure.</p>
                        </div>
                        <div className='incentives_celebration_right_border_bottom'>
                            <h4></h4>
                        </div>

                    </div>
                </div>

            </div>
            </div>

        </div>
    )
}
