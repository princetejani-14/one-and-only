import React from 'react'
import './exclusivvillas.scss'
import img1 from '../../../../../assets/image/exclusive-villas-right-img.webp'
export default function Exclusivvillas() {
  return (
    <div>
        <div className='container'>
                <div className='exclusiv_villas_main'>
                    <div className='exclusiv_villas_left'>
                        <div className='exclusiv_villas_left_text'>
                            <h1>Exclusively yours</h1>
                            <p>Nowhere else do the wonders of the planet’s most incredible locations fuse so intimately with the warm feeling of home. Spacious retreats that envelop you in seclusion and seamlessly blend outdoors with in, immersing you in the colours and textures of ‘here’. Offering the finest private amenities and unrivalled personal service. This is living at its very best.</p>
                        </div>
                    </div>
                    <div className='exclusiv_villas_right'>
                        <img src={img1}/>
                    </div>

                </div>
        </div>
      
    </div>
  )
}
