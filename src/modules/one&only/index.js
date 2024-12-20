import React from 'react'
import './oneandonly.scss'
import Oneandonlymain from './one&onlymain'
import Resort from './resorts'
import Adventuresandactivities from './experiance/adventures-activities'
import Experiance from './experiance'
import Header from '../../components/header'
import Footer from '../../components/footer'

export default function Oneandonly() {
  return (
    <div className='raju'>
      <Header/>
      <Oneandonlymain/>
      <Resort/>
      <Experiance/>
      <Footer/>
    </div>
  )
}
