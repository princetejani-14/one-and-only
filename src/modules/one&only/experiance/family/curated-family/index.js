import React from 'react'
import Slider from "react-slick";
import './curatedfamily.scss'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import img1 from '../../../../../assets/image/curated-family-img-one.webp'
import img2 from '../../../../../assets/image/curated-family-img-two.webp'
import img3 from '../../../../../assets/image/curated-family-img-three.webp'
import img4 from '../../../../../assets/image/curated-family-img-four.webp'
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='rigtharrow_curated_family'
            onClick={onClick}
        >
            <MdKeyboardArrowRight className='right_curated_family' />

        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='leftarrow_curated_family'
            onClick={onClick}
        >
            <MdKeyboardArrowLeft className='left_curated_family' />

        </div>
    );
}
export default function Curatedfamily() {
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
            <div className='curated_family_heading'>
                <h1>Curated Family Itineraries</h1>
            </div>
            <div className='container2'>
                <div className='curated_family_top'>
                    <  div className="slider-container">
                        <Slider {...settings}>
                            <div className='curated_family_main'>
                                <div className='curated_family_img_one'>
                                    <img src={img1} />
                                </div>
                                <div className='curated_family_text_one_main'>
                                    <div className='curated_family_text_one'>
                                        <h1>Family time in the Maldives</h1>
                                        <p>This irresistible itinerary delivers four days of liquid thrills, island adventures, delicious dining, plenty of playtime, and magical moments of romance at One&amp;Only Reethi Rah. Gather your tribe for your ultimate Maldives family holiday.</p>
                                        <h6>explore</h6>
                                    </div>
                                </div>
                            </div>
                            <div className='curated_family_main'>
                                <div className='curated_family_img_one'>
                                    <img src={img2} />
                                </div>
                                <div className='curated_family_text_one_main'>
                                    <div className='curated_family_text_one'>
                                        <h1>Under the Mexican sun</h1>
                                        <p>Discover the secluded rugged jungle terrain of Riviera Nayarit for the ultimate family adventure at One&amp;Only Mandarina. Join the experience with our ultimate three-day itinerary with endless space for little explorers to run, hike, swim, kayak, surf, bike and biplane.</p>
                                        <h6>explore</h6>
                                    </div>
                                </div>
                            </div>
                            <div className='curated_family_main'>
                                <div className='curated_family_img_one'>
                                    <img src={img3} />
                                </div>
                                <div className='curated_family_text_one_main'>
                                    <div className='curated_family_text_one'>
                                        <h1>Adriatic escape</h1>
                                        <p>Explore the dramatic coastline and rugged landscapes of the Adriatic Riviera from One&amp;Only Portonovi, where villas with private beaches, pools and jetties provide the perfect setting for unforgettable family reunions.</p>
                                        <h6>explore</h6>
                                    </div>
                                </div>
                            </div>
                            <div className='curated_family_main'>
                                <div className='curated_family_img_one'>
                                    <img src={img4} />
                                </div>
                                <div className='curated_family_text_one_main'>
                                    <div className='curated_family_text_one'>
                                        <h1>Malaysian getaway</h1>
                                        <p>Be enchanted by the wild beauty of Malaysia, with our three-day family itinerary at One&Only Desaru Coast. From guided nature walks to thrilling watersports, our coastal hideaway beckons for blissful days and starlit nights gathered around the bonfire.</p>
                                        <h6>explore</h6>
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

