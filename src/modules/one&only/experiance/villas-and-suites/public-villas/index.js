import React from 'react'
import Slider from "react-slick";
import './publicvillas.scss'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import img1 from '../../../../../assets/image/mostexpensive-villas-img-one.webp'
import img2 from '../../../../../assets/image/mostexpensive-villas-img-two.webp'
import img3 from '../../../../../assets/image/mostexpensive-villas-img-three.webp'
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='rigtharrow_public_villas'
            onClick={onClick}
        >
            <MdKeyboardArrowRight className='right_public_villas' />

        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='leftarrow_public_villas'
            onClick={onClick}
        >
            <MdKeyboardArrowLeft className='left_public_villas' />

        </div>
    );
}
export default function Publicvillas() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
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
                slidesToShow: 2,
                slidesToScroll: 1,
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
            <div className='public_villas_heading'>
                <h1>Villa One: Our most exclusive address</h1>
            </div>
            <div className='container'>
                <div className='public_villas_top'>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className='public_villas_main'>
                                <div className='public_villas_img_one'>
                                    <img src={img1} />
                                </div>
                                <div className='public_villas_text_one'>
                                    <h1>One&Only Le Saint Géran</h1>
                                    <p>The most exclusive retreat in Mauritius, One&Only’s exceptional standalone two-bedroom villa boasts incomparable seclusion, a spectacular swimming pool and divine private terrace with undisturbOne&Only Le Saint Géran</p>
                                    <h6>explore</h6>
                                </div>
                            </div>
                            <div className='public_villas_main'>
                                <div className='public_villas_img_one'>
                                    <img src={img2} />
                                </div>
                                <div className='public_villas_text_one'>
                                    <h1>One&Only Mandarina</h1>
                                    <p>Tucked away yet standing proud at the top of the hilltop, experience a whole new level of grandeur in our crowning two-story villa at One&amp;Only Mandarina. With opulent infinity pools, hot tubs and vast wine cellars, it’s tempting to never leave at all.</p>
                                    <h6>explore</h6>
                                </div>
                            </div>
                            <div className='public_villas_main'>
                                <div className='public_villas_img_one'>
                                    <img src={img3} />
                                </div>
                                <div className='public_villas_text_one'>
                                    <h1>One&Only Palmilla</h1>
                                    <p>Visit Mexico’s most coveted destination, One&amp;Only Palmilla’s exquisite Villa One where time stands still. From brilliant ocean views to velvet infinity pools, our resort’s elite residence offers a beautifully crafted space. Surrender to the heartfelt touches at Villa One.</p>
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


