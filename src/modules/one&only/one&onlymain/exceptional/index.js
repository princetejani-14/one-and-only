import React from 'react'
import './exceptional.scss'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import exceptionalimgfirst from '../../../../assets/image/home-excptonal-boat-image.webp'
import exceptionimgsecond from '../../../../assets/image/home-excptional-img-second.webp'
import exceptionimgthird from '../../../../assets/image/home-exceptional-img-third.webp'
import exceptionimgfour from '../../../../assets/image/home-exception-img-four.webp'

import Slider from "react-slick";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='rigtharrow'
            onClick={onClick}
        >
            <MdKeyboardArrowRight className='right' />

        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='leftarrow'
            onClick={onClick}
        >
            <MdKeyboardArrowLeft className='left' />

        </div>
    );
}
export default function Exceptional() {
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
            <div className='container'>
                <div className='exceptionalmain'>
                    <h1>Exceptional One-offs</h1>
                    <p>From uncharted wilderness to hidden beaches, alpine hideaways and captivating city stays, let us set the stage for your next exceptional escape. Discover a world of one-offs with One&Only Resorts and Private Homes, found in the most inspiring locations on Earth.
                        - Celebrating Exceptional One-Offs -</p>
                    <button>our resorts</button>
                </div>
                <div className='arrowslidermain'>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className='exceptional-one'>
                                <div className='exceptional-img-one'>
                                    <img src={exceptionalimgfirst} alt='boat' />
                                </div>
                                <div className='exceptional-text-one'>
                                    <h1>SECRETS OF AESTHESIS</h1>
                                    <p>Discover the Athenian Riviera through the lens of local experts and artisans. Sail the Aegean, explore ancient ruins, and savour the tastes of land and sea. Experience the charm of One&Only Aesthesis through captivating stories.</p>
                                    <h5>EXPLORE</h5>
                                </div>
                            </div>
                            <div className='exceptional-two'>
                                <div className='exceptional-img-two'>
                                    <img src={exceptionimgsecond} alt='boat' />
                                </div>
                                <div className='exceptional-text-two'>
                                    <h1>Secrets of Kéa Island</h1>
                                    <p>A land of rugged natural beauty and cultural rituals, Kéa Island feels like a closely guarded secret. Let us reveal the wonders of this fabled island as locals share untold stories and exceptional experiences of Kéa.</p>
                                    <h5>EXPLORE</h5>
                                </div>
                            </div>
                            <div className='exceptional-three'>
                                <div className='exceptional-img-three'>
                                    <img src={exceptionimgthird} alt='boat' />
                                </div>
                                <div className='exceptional-text-three'>
                                    <h1>Gateway to Dubai</h1>
                                    <p>On the doorstep of Dubai's financial, retail and culinary hubs, One&amp ;Only One Zaabeel is the place to be for foodies, business travellers, fashionistas, families and wellness seekers.</p>
                                    <h5>EXPLORE</h5>
                                </div>
                            </div>
                            <div className='exceptional-four'>
                                <div className='exceptional-img-four'>
                                    <img src={exceptionimgfour} alt='boat' />
                                </div>
                                <div className='exceptional-text-four'>
                                    <h1>One&Only Aesthesis Grand Opening</h1>
                                    <p>One&amp;Only Aesthesis celebrated its Grand Opening over three glittering days, as A-list celebrities and global tastemakers including Kylie Minogue, Joe Jonas, Kim Cattrall, Olivier Rousteing and Luke Evans ushered in a new golden era on the Athenian Riviera.</p>
                                    <h5>EXPLORE</h5>
                                </div>
                            </div>


                        </Slider>
                    </div>

                </div>

            </div>

        </div>
    )
}
