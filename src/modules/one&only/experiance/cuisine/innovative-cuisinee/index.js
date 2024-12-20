import React from 'react'
import './innovativecuisine.scss'
import img1 from '../../../../../assets/image/innovative-cuisine-img.webp'
export default function Innovativecuisine() {
    return (
        <div className='container'>
            <div className='innovative_cuisine_main'>
                <div className='innovative_cuisine_text_main'>
                    <div className='innovative_cuisine_text'>
                        <h1>Innovative epicurean experience</h1>
                        <p>Inspired by constant exploration of Mexico’s bountiful ingredients, Chef Olvera’s Carao at One&Only Mandarina is an extraordinary dining destination. Experience a twist of modern yet authentic Mexican cuisine where unique regional flavours are celebrated, all in a relaxed and elegant atmosphere amidst the coastal rainforest of Mexico’s Riviera Nayarit.</p>
                        <button>explore</button>
                    </div>
                </div>
                <div className='innovative_cuisine_img'>
                    <img src={img1} />
                </div>
            </div>
        </div>
    )
}
