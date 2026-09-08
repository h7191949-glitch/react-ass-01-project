import React from 'react'
import Announcement from '../../components/announcement/announcement'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/herosection/Hero'
import NewArrivals from '../../components/newarrivals/NewArrivals'
import CartBtn from '../../components/cartbtn/CartBtn'
import products from '../../components/carts/products'
import topSelling from '../../components/carts/topselling'
import DressStyle from '../../components/dressStyle/DressStyle'
import HappyCustomers from '../../components/customer/Customer'
import LastestOffer from '../../components/lastestoffer/LatestOffer'
import Footer from '../../components/footer/Footer'


export default function Home() {
  return (
    <>
      <Announcement />
      <Navbar />
      <Hero />
      <NewArrivals
            title="NEW ARRIVALS"
            products={products}
        />
        <CartBtn />
        
        <NewArrivals
      title="TOP SELLING"
      products={topSelling}
      />
      <CartBtn />

      <DressStyle />
      <HappyCustomers />
      <LastestOffer />
      <Footer />
    </>
  )
}