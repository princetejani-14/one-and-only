import React from 'react'
import Slider from "react-slick";
import './signaturedining.scss'
import img1 from '../../../../../assets/image/signaturedining-cuisine-left-img.webp'
import img2 from '../../../../../assets/image/signaturedining-cuisine-center-img.webp'
import img3 from '../../../../../assets/image/signaturedining-cuisine-right-img.webp'
export default function Signaturedining() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <div className='signaturedining_cuisine_main'>
                <h1>Tapasake: One&Only Signature Dining</h1>
                <p>Embodying relaxed Asian elegance and earthy ambience, Tapasake’s synthesis of contemporary Japanese cooking and rich Western flavours are served in a unique Tapas style. Discover our three Tapasake destinations, each uniquely crafted by different elements of modern embodiment of Japanese and Asian cuisine.</p>
                <button>Discover More</button>
            </div>
            <div className='container2'>
                <div className='signaturedining_cuisine_main2'>
                    <div className='signaturedining_cuisine_left'>
                        <div className='signaturedining_cuisine_left_img'>
                            <img src={img1} />
                        </div>
                        <div className='signaturedining_cuisine_left_text_main'>
                            <div className='signaturedining_cuisine_left_text'>
                                <h1>Tapasake at One&Only Reethi Rah</h1>
                                <p>Savour the fragrant aromas and hand-pick your fresh seafood at the impressive granite sushi counter. Feel completely entranced with the outdoor teppanyaki experience as you watch the flaming grills spark along with the mesmerising sunset views.</p>
                                <h6> Discover more</h6>
                            </div>
                        </div>
                    </div>
                    <div className='signaturedining_cuisine_center'>
                        <div className='signaturedining_cuisine_center_img'>
                            <img src={img2} />

                        </div>
                        <div className='signaturedining_cuisine_center_text_main'>
                            <div className='signaturedining_cuisine_center_text'>
                                <h1>Tapasake at One&Only Le Saint Géran</h1>
                                <p>Indulge in theatre-style Asian tapas at the sun-kissed ocean setting of Tapaske at One&amp;Only Le Saint Géran. Savour your crisp cocktail and watch with wide eyes as our talented chefs add a modern Peruvian twist to thriving Japanese traditions.</p>
                                <h6> Discover more</h6>
                            </div>
                        </div>

                    </div>
                    <div className='signaturedining_cuisine_right'>
                        <div className='signaturedining_cuisine_right_img'>
                            <img src={img3} />

                        </div>
                        <div className='signaturedining_cuisine_right_text_main'>
                            <div className='signaturedining_cuisine_right_text'>
                                <h1>Tapasake Club at One&Only Portonovi</h1>
                                <p></p>Joining our vibrant Tapasake family is the new Tapasake Club at One&amp;Only Portonovi. Framed by the Adriatic waters and bay views, this is set to be a one-of-a-kind destination dining in the region. Be mesmerised by the tantalising dishes, vibrant energy of the pool club and the live DJ sets, and eclectic poolside bites and cocktails.
                                <h6> Discover more</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='signaturedining_responsive'>
                <div className="slider-container">
                    <Slider {...settings}>
                        <div className='signaturedining_cuisine_left'>
                            <div className='signaturedining_cuisine_left_img'>
                                <img src={img1} />
                            </div>
                            <div className='signaturedining_cuisine_left_text_main'>
                                <div className='signaturedining_cuisine_left_text'>
                                    <h1>Tapasake at One&Only Reethi Rah</h1>
                                    <p>Savour the fragrant aromas and hand-pick your fresh seafood at the impressive granite sushi counter. Feel completely entranced with the outdoor teppanyaki experience as you watch the flaming grills spark along with the mesmerising sunset views.</p>
                                    <h6> Discover more</h6>
                                </div>
                            </div>
                        </div>
                        <div className='signaturedining_cuisine_center'>
                            <div className='signaturedining_cuisine_center_img'>
                                <img src={img2} />
                            </div>
                            <div className='signaturedining_cuisine_center_text_main'>
                                <div className='signaturedining_cuisine_center_text'>
                                    <h1>Tapasake at One&Only Le Saint Géran</h1>
                                    <p>Indulge in theatre-style Asian tapas at the sun-kissed ocean setting of Tapaske at One&amp;Only Le Saint Géran. Savour your crisp cocktail and watch with wide eyes as our talented chefs add a modern Peruvian twist to thriving Japanese traditions.</p>
                                    <h6> Discover more</h6>
                                </div>
                            </div>
                        </div>
                        <div className='signaturedining_cuisine_right'>
                            <div className='signaturedining_cuisine_right_img'>
                                <img src={img3} />

                            </div>
                            <div className='signaturedining_cuisine_right_text_main'>
                                <div className='signaturedining_cuisine_right_text'>
                                    <h1>Tapasake Club at One&Only Portonovi</h1>
                                    <p></p>Joining our vibrant Tapasake family is the new Tapasake Club at One&amp;Only Portonovi. Framed by the Adriatic waters and bay views, this is set to be a one-of-a-kind destination dining in the region. Be mesmerised by the tantalising dishes, vibrant energy of the pool club and the live DJ sets, and eclectic poolside bites and cocktails.
                                    <h6> Discover more</h6>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>

    )
}
