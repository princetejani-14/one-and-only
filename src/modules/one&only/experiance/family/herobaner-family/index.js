import React from 'react'
import './herobanerfamily.scss'
import img1 from '../../../../../assets/image/herobaner-family-img.webp'
import { FaAngleRight } from "react-icons/fa";
export default function Herobanerfamily() {
  return (
    <div>
         <div className='herobaner_family_main'>
                <div className='herobaner_family_img'>
                    <div className='blure'></div>
                    <img src={img1} />
                </div>
                <div className='herobaner_family_text'>
                    <h1>FAMILY</h1>
                     <p>Enjoy cherished time together as you reconnect with those who matter most at One&Only resorts.</p>
                </div>
            </div>
            <div className='herobaner_family_main2'>
                <p>One&Only Resorts</p>
                <FaAngleRight />
                <p>experiences</p>
                <FaAngleRight />
                <p>Family</p>
            </div>
      
    </div>
  )
}
