import React from 'react'
import './herobanercelebration.scss'
import { FaAngleRight } from "react-icons/fa";
import img1 from '../../../../../assets/image/herobaner-celebration-img.webp'
export default function Herobanercelebration() {
  return (
    <div>
      <div className='herobaner_celebration_main'>
                <div className='herobaner_celebration_img'>
                    <div className='blure'></div>
                    <img src={img1} />
                </div>
                <div className='herobaner_celebration_text'>
                    <h1>Celebrations & Events</h1>
                     <p>Mark life’s milestones in spectacular fashion, as One&Only brings your one-of-a-kind wedding, birthday or unforgettable event to life.</p>
                </div>
            </div>
            <div className='herobaner_celebration_main2'>
                <p>One&Only Resorts</p>
                <FaAngleRight />
                <p>experiences</p>
                <FaAngleRight />
                <p>celebration&Events</p>
            </div>
    </div>
  )
}
