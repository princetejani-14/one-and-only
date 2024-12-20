import React from 'react'
import './herobanervillas.scss'
import { FaAngleRight } from "react-icons/fa";
import img1 from '../../../../../assets/image/herobaner-villas.webp'
export default function Herobanervillas() {
    return (
        <div>
            <div className='herobaner_villas_main'>
                <div className='herobaner_villas_img'>
                    <div className='blure'></div>
                    <img src={img1} />
                </div>
                <div className='herobaner_villas_text'>
                    <h1>Villas & Suites</h1>
                    <p>One&Only villas and suites offer unparalleled space and privacy. </p>
                </div>
            </div>
            <div className='herobaner_villas_main2'>
                <p>One&Only Resorts</p>
                <FaAngleRight />
                <p>experiences</p>
                <FaAngleRight />
                <p>Villas and Suites</p>
            </div>

        </div>
    )
}
