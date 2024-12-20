import React from 'react'
import './artcelebration.scss'
import img1 from '../../../../../assets/image/art-celebration-left-img.webp'
import img2 from '../../../../../assets/image/art-celebration-right-img.webp'
export default function Artcelebration() {
    return (
        <div>
            <div className='art_celebration_bg'>
                <div className='container'>
                    <div className='art_celebration_main'>
                        <div className='art_celebration_left'>
                            <h1>The art of ‘I do’</h1>
                            <img src={img1} />
                        </div>
                        <div className='art_celebration_right'>
                            <img src={img2} />
                            <p>We’re skilled in the art of planning a wedding – but at One&Only, no two weddings are ever the same. There’s no template, no cookie-cutter. We begin with a blank page of endless possibilities and help you write your One&Only story together.</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
