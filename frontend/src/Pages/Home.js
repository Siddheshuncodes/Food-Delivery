import React from 'react'
import Navbar from '../Component/Navbar'
import Advertise from '../Component/AdvertiseHome'
import Footer from '../Component/Footer'
import SearchFood from '../Component/SearchFood'
import Shortadd from '../Component/Shortadd'


export default function Home() {
  return (
    <>
    <Navbar/>
    <Advertise/>
    <SearchFood/>
    <Shortadd/>
    <Footer/>
    </>
  )
}
