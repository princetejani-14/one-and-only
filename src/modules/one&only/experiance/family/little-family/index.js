import React from 'react'
import './littlefamily.scss'
import img1 from '../../../../../assets/image/little-family-baner-img.webp'
import img2 from '../../../../../assets/image/little-family-main-img.webp'
export default function Littlefamily() {
    return (
        <div>
            <div className='little_family_main'>
                <img src={img1} alt='littlefamilybanerimg' />
            </div>
            <div className='container'>
            <div className='little_family_main2'>
                <div className='little_family_text_main'>
                    <div className='little_family_text'>
                        <h1>FOR THE LITTLE ONES</h1>
                        <p>Watch the joy in little faces light up as we introduce the youngest members of your tribe to our KidsOnly club. Our inspiring programmes let junior explorers connect with nature, nurture their creative spirit, or simply relax and watch movies under the stars.</p>
                    </div>
                </div>
                <div className='little_family_img'>
                    <img src={img2} />
                </div>
            </div>
        </div>
        </div>
    )
}
