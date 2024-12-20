import React from 'react'
import './romancecelbration.scss'
import Slider from "react-slick";
import img1 from '../../../../../assets/image/romance-celebration-img-one.webp'
import img2 from '../../../../../assets/image/romance-celebration-img-two.webp'
import img3 from '../../../../../assets/image/romance-celebration-img-three.webp'
import img4 from '../../../../../assets/image/romance-celebration-img-four.webp'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='rigtharrow_romance_celebration'
            onClick={onClick}
        >
            <MdKeyboardArrowRight className='right_romance_celebration' />

        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='leftarrow_romance_celebration'
            onClick={onClick}
        >
            <MdKeyboardArrowLeft className='left_romance_celebration' />

        </div>
    );
}
export default function Romancecelebration() {
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
                slidesToShow: 1.2,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <div>
            <div className='romance_celebration_top'>
                <  div className="slider-container">
                    <Slider {...settings}>
                        <div className='romance_celebration_main'>
                            <div className='romance_celebration_img_one'>
                                <img src={img1} />
                            </div>
                            <div className='romance_celebration_text_one'>
                                <h1>Mandarina romance</h1>
                                <p>For your bespoke ceremony at One&amp;Only Mandarina in Mexico’s Riviera Nayarit, choose between clifftop views, a coastal rainforest setting, or a golden hour gathering on the ocean’s edge.</p>
                                <h6>discover more</h6>
                            </div>
                        </div>
                        <div className='romance_celebration_main'>
                            <div className='romance_celebration_img_one'>
                                <img src={img2} />
                            </div>
                            <div className='romance_celebration_text_one'>
                                <h1>Arabian magic</h1>
                                <p>Within one of Dubai’s most romantic retreats, host an exceptional wedding in elegant Arabesque surrounds, where Moorish details, fountains and lanterns create an enchanting backdrop to say ‘I do’.</p>
                                <h6>discover more</h6>
                                
                            </div>
                        </div>
                        <div className='romance_celebration_main'>
                            <div className='romance_celebration_img_one'>
                                <img src={img3} />
                            </div>
                            <div className='romance_celebration_text_one'>
                                <h1>Los Cabos seduction</h1>
                                <p>Exchange vows amid the coastal charms of Los Cabos at One&Only Palmilla, where elegant ballrooms, lush lawns, al fresco terraces, and a fragrant herb garden provide the ideal setting for your beachside soiree.</p>
                                <h6>explore</h6>
                            </div>
                        </div>
                        <div className='romance_celebration_main'>
                            <div className='romance_celebration_img_one'>
                                <img src={img4} />
                            </div>
                            <div className='romance_celebration_text_one'>
                                <h1>Island dreaming</h1>
                                <p>Bring barefoot luxury to your big day with a toes-in-the-sand wedding at One&amp;Only Reethi Rah in the Maldives. Celebrate your new life together in a postcard-perfect position overlooking the Indian Ocean.</p>
                                <h6>explore</h6>
                            </div>
                        </div>
                        

                    </Slider>
                </div>

            </div>

        </div>
    )
}
