import React from 'react'
import './oceanadventures.scss'
import img1 from '../../../../../assets/image/ocean-bg.webp'
import img2 from '../../../../../assets/image/ocean-left-img.webp'
import img3 from '../../../../../assets/image/ocean-center-img.webp'
import img4 from '../../../../../assets/image/ocean-right-img.webp'
export default function Oceanadventures() {
    return (
        <div>
            <div className='ocean_adventures_main'>
                <div className='ocean_adventures_top'>
                    <img src={img1} />
                </div>
                <div className='ocean_adventures_bottom'>
                    <div className='ocean_adventures_bottom_first'>
                        <div className='ocean_adventures_bottom_first_up'>

                        </div>
                        <div className='ocean_adventures_bottom_first_down'>
                            <h1>Adventures by the sea</h1>
                            <div className='border_bottom'><h1></h1></div>
                            <p>Witness nature’s most incredible displays with the wind in your hair and the sun kissing your skin. From scenic seas to the open ocean, embrace life on the crystal waters with personalised private charters, whale watching, thrilling watersports and ultimate relaxation with our range of one-of-a-kind moments, available on the azure seas.</p>
                        </div>
                    </div>
                    <div className='ocean_bottom_img_flex'>
                    <div className='ocean_adventures_bottom_second'>
                        <div className='ocean_adventures_bottom_second_up'>
                            <img src={img2} />
                        </div>
                        <div className='ocean_adventures_bottom_second_down'>
                            <h1>The beauty of Baja</h1>
                            <p>Head out for a sunrise surf, cruise the Baja coastline, experience whale watching excursions and dip in the only swimmable beach in Los Cabos, at One&amp;Only Palmilla.</p>
                            <h6>explore</h6>
                        </div>

                    </div>
                    <div className='ocean_adventures_bottom_third'>
                        <div className='ocean_adventures_bottom_third_up'>
                            <img src={img3} />
                        </div>
                        <div className='ocean_adventures_bottom_third_down'>
                            <h1>Oceans of activity</h1>
                            <p>Embrace the Maldivian way of life at One&amp;Only Reethi Rah, with big game fishing, thrilling water sports and private sandbank experiences amongst the highlights.</p>
                            <h6>explore</h6>
                        </div>
                    </div>
                    <div className='ocean_adventures_bottom_four'>
                        <div className='ocean_adventures_bottom_four_up'>
                            <img src={img4} />
                        </div>
                        <div className='ocean_adventures_bottom_four_down'>
                            <h1>Dive in & explore</h1>
                            <p>From big game fishing to thrilling watersports and snorkelling, embrace the relaxed Mauritian way of life at One&amp;Only Le Saint Géran.</p>
                            <h6>explore</h6>
                        </div>
                    </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
