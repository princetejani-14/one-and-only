import React from 'react'
import './eventdubai.scss'
import img1 from '../../../../../../assets/image/dubaievent-left-img.webp'
import img2 from '../../../../../../assets/image/dubaievent-right-img.webp'
export default function Eventdubai() {
    return (
        <div>
            <div className='event_dubai_main'>
                <h1>DUBAI EVENTS CALENDER</h1>
                <p>Don’t miss the latest happenings in Dubai. Explore all the city has to offer, from concerts to festivals and sports events to exhibitions.</p>
            </div>
            <div className='container'>
                <div className='event_dubai_main2'>
                    <div className='event_dubai_left'>
                        <div className='event_dubai_img_left'>
                            <img src={img1} />
                        </div>
                        <div className='event_dubai_text_left'>
                            <h1>Dubai International Boat Show</h1>
                            <p>Experience the world’s most opulent super yachts and sailboats combined with the latest marine technology at the Dubai International Boat Show. The 2024 edition will take place at the Dubai Harbour, poised to be the biggest marina in the region and steps away from One&Only Royal Mirage and One&Only The Palm.</p>
                            <br></br>
                            <br></br>
                            <p>March 2024</p>
                            <p>Dubai Harbour</p>
                            <h6>Discover</h6>
                        </div>
                    </div>
                    <div className='event_dubai_right'>
                        <div className='event_dubai_img_right'>
                            <img src={img2} />
                        </div>
                        <div className='event_dubai_text_right'>
                            <h1>Art Dubai</h1>
                            <p>Celebrate art and creativity in the Middle East. A mix of cultures and innovations awaits you at Art Dubai, from intimate talks to large-scale public art exhibitions across the city.</p>
                            <br></br>
                            <br></br>
                            <p>1-3 March 2024</p>
                            <p>Madinat Jumeirah</p>
                            <h6>Discover</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
