import React from 'react'
import './rainforestadventure.scss'
import img1 from '../../../../../assets/image/rainforest-left.webp'
import img2 from '../../../../../assets/image/rainforest-right.webp'
export default function Rainforestadventures() {
    return (
        <div>
            <div className='container'>
                <div className='rainforest_adventures_main'>
                    <div className='rainforest_adventures_left'>
                        <h1>The magic of the Pacific</h1>
                        <img src={img1} />
                    </div>
                    <div className='rainforest_adventures_right'>
                        <img src={img2} />
                        <h1>...And the coastal rainforest</h1>
                        <p>Experience illuminating excursions and hands-on activities at One&Only Mandarina. Follow the striking rainforest path and step into a different world of white pristine sands. Connect with the world-class hive of Equestrian activity, the sun-dressed intrepid trails and the sensational ancient secrets of Mexico.</p>
                        <button>explore</button>
                    </div>

                </div>

            </div>

        </div>
    )
}
