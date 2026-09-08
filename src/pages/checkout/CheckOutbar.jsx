import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Announcement from '../../components/announcement/announcement'
import LastestOffer from '../../components/lastestoffer/LatestOffer'
import Footer from '../../components/footer/Footer'
import Cart from '../../components/checkout/CheckOut'

export default function CheckOutbar() {
  return (
    <>
       <Announcement />
      <Navbar />
      <Cart />
      <LastestOffer />
      <Footer />
    </>
  )
}