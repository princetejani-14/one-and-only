import React from 'react'
import './landadventures.scss'
import img1 from '../../../../../assets/image/land-left.webp'
import img2 from '../../../../../assets/image/land-center.webp'
import img3 from '../../../../../assets/image/dubaievent-right-img.webp'
export default function Landadventures() {
    return (
        <div>
            <div className='container'>
                <div className='land_top_part'>
                    <h1>Adventures on land</h1>
                </div>
                <div className='land_adventures_main'>
                    <div className='land_adventures_one'>
                        <img src={img1} />
                        <div className='contant'>
                            <div className='mojilo_one'>
                                <p>The adventure continues at One&amp;Only Cape Town, with a hike to the summit of majestic Table Mountain. The natural nirvana stretching a full kilometre into the sky is a noteworthy achievement for all abilities. See Cape Town in all its glory from this captivating sky view and wind down after with a unique wine-tasting exploration with our master sommelier.</p>
                                <h6>explore</h6>
                            </div>
                        </div>
                    </div>
                    <div className='land_adventures_two'>
                        <img src={img2} />
                        <div className='contant_two'>
                            <div className='mojilo_two'>
                                <p>Be enchanted by the coastal allure and cultural delights of Kéa, where heritage sites, rustic villages and secret beaches await. See pastoral scenes come to life, revealing donkeys, farmers and fishermen. Reconnect with seasonal rhythms and a slower pace.</p>
                                <h6>explore</h6>
                            </div>

                        </div>
                    </div>
                    <div className='land_adventures_three'>
                        <img src={img3} />
                        <div className='contant_three'>
                            <div className='mojilo_three'>
                                <p>Trek among towering trees, mountain bike through wild forests, and meet One&amp;Only Nyungwe House’s enigmatic neighbours, our troops of rare chimpanzees and colobus monkeys. From tea plantations to jungle adventures, One&amp;Only Nyugwe’s House invites you to journey through one of Africa’s oldest rainforests.</p>
                                <h6>explore</h6>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
