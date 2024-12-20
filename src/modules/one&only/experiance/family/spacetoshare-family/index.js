import React from 'react'
import './spacetosharefamily.scss'
import img1 from '../../../../../assets/image/spacetoshare-family-main-img.webp'
export default function Spacetosharefamily() {
    return (
        <div>
            <div className='container'>
                <div className='spacetoshare_family_main'>
                    <div className='spacetoshare_family_text_main'>
                        <div className='spacetoshare_family_text'>
                            <h1>Space to share</h1>
                            <p>Our unrivalled collection of villas and suites are designed with families and groups in mind. Soak up abundant space and seamless indoor-outdoor living, as you take the time to recharge and reconnect in your private hideaway.</p>
                            <button>explore</button>
                        </div>
                    </div>
                    <div className='spacetoshare_family_img'>
                        <img src={img1} />
                    </div>
                </div>
            </div>

        </div>
    )
}
