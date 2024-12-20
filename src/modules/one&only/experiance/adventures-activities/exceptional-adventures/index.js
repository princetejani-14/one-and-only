import React from 'react'
import './exceptionaladventures.scss'
import img1 from '../../../../../assets/image/ecceptional-left.webp'
import img2 from '../../../../../assets/image/exceptional-right.webp'
export default function Exceptionaladventures() {
    return (
        <div>
            <div className='container'>
                <div className='exceptional_adventures_main'>
                    <div className='exceptional_adventures_left'>
                        <img src={img1} />
                        <h1>Exceptional Encounters</h1>
                        <p>Follow misty trails through the flourishing canopy, feel the excitement build as you explore the natural habitat of these remarkable endangered mountain gorillas at One&Only Gorilla’s Nest, Rwanda. Track their movements and embark on this transformative journey of self-discovery in this once-in-a-lifetime experience.</p>
                        <button>explore</button>                       
                    </div>
                    <div className='exceptional_adventures_right'>
                        <img src={img2} />
                    </div>

                </div>
            </div>
        </div>
    )
}
