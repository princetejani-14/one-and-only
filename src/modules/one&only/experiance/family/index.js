import React from 'react'
import Herobanerfamily from './herobaner-family'
import Header from '../../../../components/header'
import Ultimatefamily from './ultimate-family'
import Adventuresfamily from './adventures-family'
import Curatedfamily from './curated-family'
import Littlefamily from './little-family'
import Spacetosharefamily from './spacetoshare-family'
import Footer from '../../../../components/footer'
export default function Family() {
  return (
    <div>
      <div>
        <Herobanerfamily/>
        <Ultimatefamily/>
        <Adventuresfamily/>
        <Curatedfamily/>
        <Littlefamily/>
        <Spacetosharefamily/>
      </div>
    </div>
  )
}
