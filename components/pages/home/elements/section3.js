import React from 'react'
import Image from 'next/image'
const Section3 = () => {
  return (
    <section className='flex flex-col lg:flex-row justify-center  mt-20 min-h-full min-w-full lg:p-20'>
        <div className='w-[98%] h-[30rem] lg:w-1/2 bg-white flex flex-col p-2  lg:p-5 gap-10'>
          <h1 className="text-xl lg:text-left font-bold lg:text-4xl text-center">Hadisi Yetu</h1>
          <p className="text-gray-500 text-2xl text-justify lg:p-5 p-2">
          African countries are defined by their histories, past and present, each woven with overlapping characters, connections and intrigues
          who share the same decor
          The African, because of his recent history and continual transformation is the product of the imaginary collective of the African people          
          </p>
        </div>
        <div className='w-[98%] h-[30rem] lg:w-1/2 rounded-lg p-2 -mt-32 lg:mt-0'>
            <Image src={'gal5.jpg'} className='min-w-full rounded-lg' width={500} height={400} alt={'picture'}/>
        </div>
    </section>
  )
}

export default Section3