import React from 'react'
import './herobanercuisine.scss'
import { FaAngleRight } from "react-icons/fa";
import img1 from '../../../../../assets/image/herobaner-cuisine-img.webp'
export default function Herobanercuisine() {
    return (
        <div>
            <div className='herobaner_cuisine_main'>
                <div className='herobaner_cuisine_img'>
                    <div className='blure'></div>
                    <img src={img1} />
                </div>
                <div className='herobaner_cuisine_text'>
                    <h1>Cuisine</h1>
                    <p>A sensorial voyage of discovery awaits at every One&Only resort.</p>
                </div>
            </div>
            <div className='herobaner_cuisine_main2'>
                <p>One&Only Resorts</p>
                <FaAngleRight />
                <p>experiences</p>
                <FaAngleRight />
                <p>cuisine</p>
            </div>

        </div>
    )
}
