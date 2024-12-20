import React from 'react'
import './chefcuisine.scss'
import img1 from '../../../../../assets/image/chef-cuisine-img-one.webp'
import img2 from '../../../../../assets/image/chef-cuisine-img-two.webp'
import img3 from '../../../../../assets/image/chef-cuisine-img-three.webp'
import img4 from '../../../../../assets/image/chef-cuisine-img-four.webp'
export default function Chefcuisine() {
    return (
        <div>
            <div className='chef_cuisine_main'>
                <h1>Our celebrity chef partnerships</h1>
            </div>
            <div className='container'>
                <div className='chef_cuisine_main2'>
                    <div className='chef_cuisine_one'>
                        <div className='chef_cuisine_img_one'>
                            <img src={img1} />
                        </div>
                        <div className='chef_cuisine_text_one'>
                            <h1>Nobu Matsuhisa</h1>
                            <p>Experience Japanese-Peruvian fusion cuisine, at Africa's only Michelin-starred Nobu, at One&Only Cape Town. Savour this invigorating medley of classics fused with local seafood for a truly exceptional experience, here at One&Only Cape Town.</p>
                            <h6>explore</h6>
                        </div>

                    </div>
                    <div className='chef_cuisine_two'>
                        <div className='chef_cuisine_img_two'>
                            <img src={img2} />
                        </div>
                        <div className='chef_cuisine_text_two'>
                            <h1>Yannick Alléno</h1>
                            <p>Indulge in an evening of timeless French cuisine by Chef Yannick Allléno at One&amp;Only The Palm. Prepare for a tantalising explosion of flavours at STAY and experience an exceptional eight-course dining with carefully selected wines paired by our in-house sommelier.</p>
                            <h6>explore</h6>
                        </div>

                    </div>
                    <div className='chef_cuisine_three'>
                        <div className='chef_cuisine_img_three'>
                            <img src={img3} />

                        </div>
                        <div className='chef_cuisine_text_three'>
                            <h1>Enrique Olvera</h1>
                            <p>Relish in sensory dining at Carao by Enrique Olvera, at One&amp;Only Mandarina. Defined as the future of Mexican cuisine, experience unrivalled flavours of smoked octopus and cured fish leave a lasting impression. His traditional palate will have you on an impressive voyage of culinary discovery</p>
                            <h6>explore</h6>
                        </div>
                    </div>
                    <div className='chef_cuisine_four'>
                        <div className='chef_cuisine_img_four'>
                            <img src={img4} />
                        </div>
                        <div className='chef_cuisine_text_four'>
                            <h1>Jean-Georges Vongerichten</h1>
                            <p>Savour Chef Jean-Gorges’ signature dishes of velvet sashimi slices, rich marbled meats and ocean fresh seafood dishes at One&amp;Only Palmilla. Get only the best at our awe-inspiring signature restaurant, SEARED.</p>
                            <h6>explore</h6>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
