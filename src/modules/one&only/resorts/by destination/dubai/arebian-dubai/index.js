import React from 'react'
import './arebiandubai.scss'
import img1 from '../../../../../../assets/image/One&Only Royal Mirage.webp'
import img2 from '../../../../../../assets/image/One&Only the palm.webp'
import img3 from '../../../../../../assets/image/One&Only zaabeel.webp'

export default function Arebiandubai() {
    return (
        <div className='container2'>
            <div className='arebian_dubai_main'>
                <div className='arebian_dubai_one'>
                    <div className='arebian_dubai_img'>
                        <img src={img1} />
                    </div>
                    <div className='arebian_dubai_text'>
                        <h1>One&Only Royal Mirage</h1>
                        <p>In the cosmopolitan heart of Dubai, One&Only Royal Mirage evokes timeless Arabian splendour and elevated energy. A true resort, this urban shoreside oasis is spread across three distinct spaces, with a pristine kilometre-long private beach and curated dining and adventure inspired by the magic of Arabia.</p>
                        <h6>Discover</h6>
                    </div>
                </div>
                <div className='arebian_dubai_two'>
                    <div className='arebian_dubai_img_two'>
                        <img src={img2} />
                    </div>
                    <div className='arebian_dubai_text_two'>
                        <h1>One&Only The Palm</h1>
                        <p>Oneamp;Only The Palm is situated on Dubai’s exclusive ‘riviera’, where coastal tranquillity meets the energy of the city’s urban skyline. Refined and assured, this boutique beach resort is infused with endless romanticism, elegance and creativity. Discover a space for every mood, from Chef Yannick Alléno’s Michelin-starred cuisine to exceptional wellness at Guerlain Spa.</p>
                        <h6>Discover</h6>
                    </div>
                </div>
                <div className='arebian_dubai_three'>
                    <div className='arebian_dubai_img_three'>
                        <img src={img3} />
                    </div>
                    <div className='arebian_dubai_text_three'>
                        <h1>One&Only One Za'abeel</h1>
                        <p>Imagine a place that’s the centre of everything. Of culture, of cuisine, of entertainment, of business. Where the fascinating gravitate by day, and circulate by night, and where everything the city offers can be curated, just for you. Welcome to One&amp;Only One Za’abeel, the world’s first ultra-luxury vertical urban resort in the soulful heart of Dubai.</p>
                        <h6>Discover</h6>
                    </div>
                </div>

            </div>

        </div>
    )
}
