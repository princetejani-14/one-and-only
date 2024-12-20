import React from 'react'
import './herobaner.scss'
import Slider from "react-slick";
import homesliderimg1 from '../../../../assets/image/homesliderimg1.webp'
import homesliderimg2 from '../../../../assets/image/homesliderimg2.webp'
import homesliderimg3 from '../../../../assets/image/homesliderimg3.webp'
export default function Herobaner() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 7000,

    };
    return (
        <div>
            <div className='ok'>
                <div className="slider-container">
                    <Slider {...settings}>
                        <div className='banermain'>
                            <div className='banerimg'>
                                <img src={homesliderimg1} />
                            </div>
                            <div className='banertext'>
                                <h1>One&Only Kéa Island</h1>
                                <p>Unlock the secrets of Kéa island with our exceptional new Greek resort. Resort now open</p>
                                <button>EXPLORE</button>
                            </div>
                        </div>
                        <div className='banermain'>
                            <div className='banerimg'>
                                <img src={homesliderimg2} />
                            </div>
                            <div className='banertext'>
                                <h1>One&Only One Za'abeel</h1>
                                <p>Welcome to our first urban resort, where exceptional dining, innovative wellness and extraordinary experiences converge in Dubai.</p>
                                <button>EXPLORE</button>
                            </div>
                        </div>
                        <div className='banermain'>
                            <div className='banerimg'>
                                <img src={homesliderimg3} />
                            </div>
                            <div className='banertext'>
                                <h1>Unlock the City</h1>
                                <p>Amna and Hamda Al Qubaisi open the doors to One&amp;Only One Za’abeel, a glamorous city stay in Dubai.</p>
                                <button>EXPLORE</button>
                            </div>
                        </div>
                    </Slider>
                </div>

            </div>

        </div>
    )
}
