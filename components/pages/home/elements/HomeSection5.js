import React from 'react'
import Card_Artiste from '../../../elements/CardArtiste'
const HomeSection5 = () => {
  return (
    <section className='flex flex-col justify-around items-center
    min-w-full min-h-full  lg:mt-20 mb-10 -mt-32'>
        <h1 className='p-2 flex flex-col min-w-full lg:text-4xl min-h-full mb-10 justify-around items-center text-2xl font-bold'>Best Artists</h1>
        <div className='flex flex-col lg:flex-row flex-wrap justify-around items-center min-w-full min-h-full  mb-10 gap-10'>
          <Card_Artiste names={'Doddy Matabaro'} />
          <Card_Artiste names={'Shako Kinyamba'} />
          <Card_Artiste names={'Leader Mushio'} />
        </div>
    </section>
  )
}

export default HomeSection5