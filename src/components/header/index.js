import React from 'react'
import './header.scss'
import { FaAngleDown } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoReorderThreeOutline } from "react-icons/io5";
import oneandonly from '../../assets/logo/headerlogo.webp'
export default function Header() {
  return (
    <div className='position-fixed'>
      <div className='headermain'>
        <div className='headerleft'>
          <div className='dropdown'>
            <p>EN</p>
            <FaAngleDown className='downarrow' />
          </div>
          <div className='mobileicone'>
            <BsTelephoneFill className='mobile' />
          </div>
          <div className='emailicone'>
            <MdEmail className='email' />
          </div>
          <div className='newsletter'>
            <p>NEWSLETTER</p>
          </div>

        </div>
        <div className='headerleft_ipad'>
          <IoReorderThreeOutline className='ipad_threeline'/>
        </div>
        <div className='headercenter'>
          <img src={oneandonly} />
        </div>
        <div className='headerright'>
          <button>Book now</button>
        </div>

      </div>
      <div className='headermain-under'>
        <ul>
          <li>Resorts</li>
          <li>Experiences</li>
          <li>Private Homes</li>
          <li>Stories</li>
          <li>Offers</li>
        </ul>
      </div>

    </div>
  )
}
