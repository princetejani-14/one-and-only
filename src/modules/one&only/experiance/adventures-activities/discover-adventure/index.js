import React from 'react'
import './discoveradventure.scss'
import img1 from '../../../../../assets/image/discover-adventures-right-img.webp'
export default function Discoveradventures() {
    return (
        <div>
            <div className='container'>
                <div className='discover_adventures_main'>
                    <div className='discover_adventures_left'>
                        <h1>Discover the Adriatic</h1>
                        <p>Unearth the jewel of the Adriatic Sea and unwind in elegance. Explore the adventures of Montenegro's vibrant culture and restorative waters, lined by quaint idyllic towns. From fast-paced tennis to restorative wellness and adventures on land and sea, free your spirit at our nautical playground.</p>
                        <button>explore</button>
                    </div>
                    <div className='discover_adventures_right'>
                        <img src={img1} />
                    </div>
                </div>

            </div>

        </div>
    )
}
