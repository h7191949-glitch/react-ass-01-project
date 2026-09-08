import React from 'react'
import CasualPage from '../../components/categoryCarts/categoryCarts'
import Announcement from '../../components/announcement/announcement'
import Navbar from '../../components/navbar/Navbar'
import LastestOffer from '../../components/lastestoffer/LatestOffer'
import Footer from '../../components/footer/Footer'

export default function Casual() {
  return (
    <>
    <Announcement />
    <Navbar />
      <CasualPage />
      <LastestOffer />
      <Footer />
    </>
  )
}