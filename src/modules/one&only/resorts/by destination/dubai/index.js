import React from 'react'
import Herobanerdubai from './herobaner-dubai'
import Header from '../../../../../components/header'
import Adventuredubai from './adventure-dubai'
import Arebiandubai from './arebian-dubai'
import Sliderdubai from './slider-dubai'
import Eventdubai from './event-dubai'
import Footer from '../../../../../components/footer'

export default function Dubai() {
    return (
        <div>
            <Header />
            <Herobanerdubai />
            <Adventuredubai/>
            <Arebiandubai/>
            <Sliderdubai/>
            <Eventdubai/>
            <Footer/>
        </div>
    )
}
