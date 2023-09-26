import React from 'react'
import Image from 'next/image'
const Section3 = () => {
  return (
    <section className='flex flex-col lg:flex-row justify-center  mt-12 min-h-full min-w-full lg:p-20'>
        <div className='w-[98%] h-[30rem] lg:w-1/2 bg-white flex flex-col p-2  lg:p-5 gap-10'>
          <h1 className="text-xl lg:text-left font-bold lg:text-4xl text-center">PNKB | Drc </h1>
          <p className="text-gray-500 text-2xl text-justify lg:p-5 p-2">
          Le Parc national de Kahuzi-Biega est un parc national de la république démocratique du Congo, situé à l'ouest du lac Kivu près de Bukavu, principalement dans la province du Sud-Kivu mais aussi au Nord-Kivu et au Maniema avec sa partie septentrionale.
          </p>
        </div>
        <div className='w-[98%] h-[30rem] lg:w-1/2 rounded-lg p-2 -mt-32 lg:mt-0'>
            <Image src={'/gorille4.jpg'} className='min-w-full rounded-lg' width={500} height={400} alt={'picture'}/>
        </div>
    </section>
  )
}

export default Section3