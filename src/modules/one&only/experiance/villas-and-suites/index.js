import React from 'react'
import Herobanervillas from './herobaner-villas'
import Header from '../../../../components/header'
import Spaciousvillas from './spacious-villas'
import Exclusivvillas from './exclusiv-villas'
import Privatevillas from './private-villas'
import Publicvillas from './public-villas'
import Yourtimevillas from './yourtime-villas'
import Footer from '../../../../components/footer'


export default function Villasandsuites() {
  return (
    <div>
        <div>
            <Herobanervillas/>
            <Spaciousvillas/>
            <Exclusivvillas/>
            <Privatevillas/>
            <Publicvillas/>
            <Yourtimevillas/>
        </div>
      
    </div>
  )
}
