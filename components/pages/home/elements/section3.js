import React from 'react'
import Image from 'next/image';
import { apros } from '@/utils/data';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section3 = () => {
  React.useEffect(() => {
    AOS.init({
        offset: 200,
        duration: 600,
        easing: "ease-in-sine",
        delay: 100,
      });
  }, [])
  return (
    <section className='flex flex-col lg:flex-row justify-center  mt-12 min-h-full min-w-full lg:p-20'>
        <div  data-aos="fade-right" className='w-[98%] h-[30rem] lg:w-1/2 bg-white flex flex-col p-2  lg:p-5 gap-10'>
          <h1 className="text-xl lg:text-left font-bold lg:text-4xl text-center">INPP| Drc </h1>
          <p className="text-gray-500 text-2xl text-justify lg:p-5 p-2">
            {
              apros.map((item)=>(
                item.para1
              ))
            }
          </p>
        </div>
        <div  data-aos="fade-left" className='w-[98%] h-[30rem] lg:w-1/2 rounded-lg p-2 -mt-32 lg:mt-0'>
            <Image src={'/filleInpp.jpg'} className='min-w-full rounded-lg' width={500} height={400} alt={'picture'}/>
        </div>
    </section>
  )
}

export default Section3