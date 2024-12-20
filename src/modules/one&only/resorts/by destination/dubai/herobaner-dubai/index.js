import React from 'react'
import './herobanerdubai.scss'
import { FaAngleRight } from "react-icons/fa";
import herobanerdubai from '../../../../../../assets/image/herobaner-dubai.webp'
export default function Herobanerdubai() {
    return (
        <div>
            <div className='herobaner_dubai_main'>
                <div className='herobaner_dubai_img'>
                    <div className='blure'></div>
                    <img src={herobanerdubai} />
                </div>
                <div className='herobaner_dubai_text'>
                    <h1>Welcome to Dubai</h1>
                    <p>With its natural landscapes and majestic city skyline, Dubai has become one of the world's most cosmopolitan cities and an iconic destination to visit and explore.</p>
                </div>
            </div>
            <div className='herobaner_dubai_main2'>
                <p>One&Only Resorts</p>
                <FaAngleRight />
                <p>Destinations</p>
                <FaAngleRight />
                <p>Dubai</p>
            </div>

        </div>
    )
}
