import React from 'react'
import './herobaneradventures.scss'
import { FaAngleRight } from "react-icons/fa";
import img1 from '../../../../../assets/image/herobaner-adventures.webp'
export default function Herobaneradventures() {
    return (
        <div>
            <div className='herobaner_adventures_main'>
                <div className='herobaner_adventures_img'>
                    <div className='blure'></div>
                    <img src={img1} />
                </div>
                <div className='herobaner_adventures_text'>
                    <h1>ADVENTURES & ACTIVITIES</h1>
                    <p>Discover our untouched destinations, exceptional adventures and curated experiences.</p>
                </div>
            </div>
            <div className='herobaner_adventures_main2'>
                <p>One&Only Resorts</p>
                <FaAngleRight />
                <p>experiences</p>
                <FaAngleRight />
                <p>activities</p>
            </div>

        </div>
    )
}
