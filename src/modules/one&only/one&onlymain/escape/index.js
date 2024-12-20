import React from 'react'
import './escape.scss'
import escapeimg from '../../../../assets/image/OO_Kea_Lifestyle_Boat   08 83.webp'
export default function Escape() {
    return (
        <div>
            <div className='container2'>
                <div className='escape-main'>
                    <div className='escape-img'>
                        <img src={escapeimg} />
                    </div>
                    <div className='escape-text'>
                            <h1>ESCAPE WITH ONE&ONLY</h1>
                            <p>Unlock the world of One&Only with our exclusive offers and experience even more of what you love. The choice is all yours.</p>
                           <button>Explore</button>
                    </div>

                </div>

            </div>

        </div>
    )
}
