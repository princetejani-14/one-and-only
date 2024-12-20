import React from 'react'
import './frescodiningcuisine.scss'
import img1 from '../../../../../assets/image/frescodining_cuisine_img.webp'
import img2 from '../../../../../assets/image/oorr-tapasake-side-terrace-twilight-2.webp'
export default function Frescodiningcuisine() {
    return (
        <div>
            <div className='container'>
                <div className='frescodining_cuisine_main'>
                    <div className='frescodining_cuisine_left'>
                        <img src={img1} />
                    </div>
                    <div className='frescodining_cuisine_right'>
            
                            <div className='frescodining_cuisine_right_border_top'>
                                <h2></h2>
                            </div>
                            <div className='frescodining_cuisine_right_text_data'>
                                <h1>AL FRESCO DINING</h1>
                                <h3></h3>
                                <p>Embark on a culinary voyage of discovery and dine beneath the sun and stars at One&Only’s al fresco dining destinations.</p>
                                <button>discover</button>
                            </div>
                            <div className='frescodining_cuisine_right_border_bottom'>
                                <h4></h4>
                            </div>
                        
                    </div>
                </div>

            </div>
            <div className='frescodining_cuisine_main2'>
              <img src={img2}/>  
            </div>

        </div>
    )
}
