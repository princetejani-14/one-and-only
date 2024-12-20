import React from 'react'
import './glamourcelebration.scss'
import Slider from "react-slick";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import img1 from '../../../../../assets/image/glamour-celebration-img-one.webp'
import img2 from '../../../../../assets/image/glamour-celebration-img-two.webp'
import img3 from '../../../../../assets/image/glamour-celebration-img-three.webp'
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='rigtharrow_glamour_celebration'
            onClick={onClick}
        >
            <MdKeyboardArrowRight className='right_glamour_celebration' />

        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='leftarrow_glamour_celebration'
            onClick={onClick}
        >
            <MdKeyboardArrowLeft className='left_glamour_celebration' />

        </div>
    );
}
export default function Glamourcelebration() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div>
            <div className='container2'>
                <div className='glamour_celebration_top'>
                    <  div className="slider-container">
                        <Slider {...settings}>
                            <div className='glamour_celebration_main'>
                                <div className='glamour_celebration_img_one'>
                                    <img src={img1} />
                                </div>
                                <div className='glamour_celebration_text_one_main'>
                                    <div className='glamour_celebration_text_one'>
                                        <h1>Adriatic artistry</h1>
                                        <p>Framed by majestic views of Montenegro’s Boka Bay, One&Only Portonovi’s private villas become a blank canvas for your ultimate event, perfect for intimate celebrations with family and friends.</p>
                                        <h6>discover more</h6>
                                    </div>
                                </div>
                            </div>
                            <div className='glamour_celebration_main2'>
                                <div className='glamour_celebration_img_two'>
                                    <img src={img2} />
                                </div>
                                <div className='glamour_celebration_text_two_main'>
                                    <div className='glamour_celebration_text_two'>
                                        <h1>Starlit celebrations</h1>
                                        <p>Dine amid twinkling lanterns overlooking shimmering waves at One&amp;Only Le Saint Géran in Mauritius, as you savour an elevated island-inspired menu, crafted exclusively for you.</p>
                                        <h6>discover more</h6>
                                    </div>
                                </div>
                            </div>
                            <div className='glamour_celebration_main3'>
                                <div className='glamour_celebration_img_three'>
                                    <img src={img3} />
                                </div>
                                <div className='glamour_celebration_text_three_main'>
                                    <div className='glamour_celebration_text_three'>
                                        <h1>Coastal glamour</h1>
                                        <p>Let your beachfront retreat become the stage for an effortlessly chic gathering at One&amp;Only The Palm in Dubai, with Michelin-starred menus from Yannick Alléno served in the comfort of your villa.</p>
                                        <h6> discover more</h6>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>

                </div>
            </div>
        </div>

    )
}

