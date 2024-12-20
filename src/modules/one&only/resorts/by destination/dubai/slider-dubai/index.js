import React from 'react'
import './sliderdubai.scss'
import Slider from "react-slick";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import img1 from '../../../../../../assets/image/dubai-slider-one.webp'
import img2 from '../../../../../../assets/image/dubai-slider-two.webp'
import img3 from '../../../../../../assets/image/dubai-slider-3.webp'
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='rigtharrow_dubai'
            onClick={onClick}
        >
            <MdKeyboardArrowRight className='right_dubai' />

        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='leftarrow_dubai'
            onClick={onClick}
        >
            <MdKeyboardArrowLeft className='left_dubai' />

        </div>
    );
}
export default function Sliderdubai() {
    const centermode = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "80px",
        slidesToShow: 1.74,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    return (
        <div className='centerMode'>
          <div className="slider-container">
            <Slider {...centermode}>
              <div className='advantureimg'>
                <img src={img1} alt='first' />
              </div>
              <div className='advantureimg_two'>
                <img src={img2} alt='first' />
              </div>
              <div className='advantureimg_three'>
                <img src={img3} alt='first' />
              </div>
            </Slider>
          </div>
        </div>
    )
}
