import React from 'react'
import Slider from "react-slick";
import './privatevillas.scss'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import img1 from '../../../../../assets/image/private-villas-img-one.webp'
import img2 from '../../../../../assets/image/private_villas_img-two.webp'
import img3 from '../../../../../assets/image/private_villas_img-three.webp'
import img4 from '../../../../../assets/image/private_villas_img-four.webp'
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='rigtharrow_villas'
            onClick={onClick}
        >
            <MdKeyboardArrowRight className='right_villas' />

        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='leftarrow_villas'
            onClick={onClick}
        >
            <MdKeyboardArrowLeft className='left_villas'/>

        </div>
    );
}
export default function Privatevillas() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2.1,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <div>
            <div className='private_villas_heading'>
                <h1>Private perfection</h1>
            </div>
            <div className='container'>
                <div className='private_villas_top'>
                    <  div className="slider-container">
                        <Slider {...settings}>
                            <div className='private_villas_main'>
                                <div className='private_villas_img_one'>
                                    <img src={img1} />
                                </div>
                                <div className='private_villas_text_one'>
                                    <h1>ONE&ONLY REETHI RAH, MALDIVES</h1>
                                    <h6>explore</h6>
                                </div>
                            </div>
                            <div className='private_villas_main2'>
                                <div className='private_villas_img_two'>
                                    <img src={img2} />
                                </div>
                                <div className='private_villas_text_two'>
                                    <h1>One&Only The Palm, Dubai</h1>
                                    <h6>explore</h6>
                                </div>
                            </div>
                            <div className='private_villas_main3'>
                                <div className='private_villas_img_three'>
                                    <img src={img3} />
                                </div>
                                <div className='private_villas_text_three'>
                                    <h1>ONE&ONLY LE SAINT GÉRAN, MAURITIUS  </h1>
                                    <h6>explore</h6>
                                </div>
                            </div>
                            <div className='private_villas_main4'>
                                <div className='private_villas_img_four'>
                                    <img src={img4} />
                                </div>
                                <div className='private_villas_text_four'>
                                    <h1>One&Only Desaru Coast, Malaysia</h1>
                                    <h6>explore</h6>
                                </div>
                            </div>


                        </Slider>
                    </div>

                </div>
            </div>
        </div>
    )
}
