import React from 'react'
import './flavourescuisine.scss'
import img1 from '../../../../../assets/image/flavours-cuisine-left.webp'
import img2 from '../../../../../assets/image/flavours-cuisine-right.webp'
export default function Flavourescuisine() {
    return (
        <div className='container'>
            <div className='flavoures_cuisine_main'>
                <div className='flavoures_cuisine_left'>
                    <img src={img1} />
                    <h1>The flavours of 'Here'</h1>
                    <p>Not only do our restaurants tell a story of each vibrant culture, from exotic recipes to the finest local ingredients, they are elevated to world-class standards with critically-acclaimed celebrity chefs, innovative menus, and ultra-chic settings. With open kitchens, dynamic displays, and spectacular views, our restaurants are like theatres, amazing every sense.</p>
                    <button>discover</button>
                </div>
                <div className='flavoures_cuisine_right'>
                    <img src={img2} />
                </div>

            </div>
        </div>
    )
}
