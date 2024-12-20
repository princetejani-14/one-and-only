import React from 'react'
import Herobanercelebration from './herobaner-celebrations'
import Header from '../../../../components/header'
import Oneandonlycelebration from './oneandonly-celebration'
import Artcelebration from './art-celebration'
import Romancecelebration from './romance-celebration'
import Privatediningcelebration from './privatedining-celebration'
import Glamourcelebration from './glamour-celebration'
import Incentivescelebration from './incentives-celebration'
import Birthdayscelebration from './birthdays-celebration'
import Proposalcelebration from './proposal-celebration'

export default function Celebrationsandevents() {
    return (
        <div>
            <Herobanercelebration />
            <Oneandonlycelebration/>
            <Artcelebration/>
            <Romancecelebration/>
            <Privatediningcelebration/>
            <Glamourcelebration/>
            <Incentivescelebration/>
            <Birthdayscelebration/>
            <Proposalcelebration/>
        </div>
    )
}
