/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React from 'react'
import Image from 'next/image';
import Header from './components/Header'

function Home() {
  return (
    <div className='h-screen'>
      <Header />
      <section className='flex h-[189px]'>

        <section className='w-1/2 flex flex-col items-start m-12'>
        
          <h1 className='text-[40px] w-[496px] font-bold'> IMPECCABLE CRAFTSMANSHIP AND FINESSE </h1>
          <br/>

          <section>
            <p className='h-[147px] w-[902px] text-yellow-800'>
              An example of intricate workmanship and detail, <br />
              elegant necklaces and long and short chains form a part of our desirable collection.
            </p>
            <button
              className='h-[58px] w-[288px] rounded-full p-10px gap-10px'
              style={{ backgroundColor: 'rgb(162, 152, 117)' }}
            >
              Explore Now
            </button>
          </section>

        </section>

        <div className='flex md:justify-center items-center h-screen'>
          <Image
            className='border-r-yellow-700'
            src="/Images/imageofjewellery.svg"
            alt="jewellery_image"
            width={462}
            height={647}
          
          />
        </div>

      </section>
    </div>
  )
}

export default Home
