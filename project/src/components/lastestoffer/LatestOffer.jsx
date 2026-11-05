import React from 'react'
import './LatestOffer.css'

export default function LastestOffer() {
  return (
    <>
      <section className='main-offer-section'>
        <div>
            <h1>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
        </div>

        <div>
            <form className='offer-input'>
            <input type='email' placeholder='Enter Your Email address' />

            <div className='offer-btn'>
            <button>Subscribe to Newsletter</button>
            </div>
            </form>
        </div>
      </section>
    </>
  )
}