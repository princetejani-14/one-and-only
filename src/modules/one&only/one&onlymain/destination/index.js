import React from 'react'
import './destination.scss'
import destinationmainimg from '../../../../assets/image/One&Only_Kéa_Island_P2_Resort_Views_2624_MASTER.webp'
import destinationoneimg from '../../../../assets/image/oorr-family-pool-drone-aerial-1.webp'
import destinationsecondimg from '../../../../assets/image/oomm-signature-villa-01-kitchen-dining-living.webp'
export default function Destination() {
    return (
        <div>
            <div className='container2'>
                <div className='destination-main'>
                    <img src={destinationmainimg} />
                </div>
            </div>
            <div className='container'>
                <div className='destination-main-second'>
                    <div className='destination-our-resorts'>
                        <div className='des-ou-resort-img'>
                            <img src={destinationoneimg} />
                        </div>
                        <div className='des-ou-resort-text-left'>
                            <h1>Our Resorts</h1>
                            <p>Found in the world’s most inspiring destinations, discover exceptional, one-off resorts that place you in the heart of each fascinating location.</p>
                            <h6>Discover Our Resorts</h6>
                        </div>
                    </div>
                    <div className='destination-our-private-home'>
                        <div className='des-ou-resort-img-two'>
                            <img src={destinationsecondimg} />
                        </div>
                        <div className='des-ou-resort-text-rigth'>
                            <h1>our private home</h1>
                            <p>One&Only Private Homes feature an exclusive collection of iconic villas in captivating coastal and urban locations, now available to purchase and stay.</p>
                            <h6>Discover Our private home</h6>
                        </div>

                    </div>
                </div>
            </div>



        </div>
    )
}
