import React from 'react'
import ButtonInfos from "../pages/home/elements/ButtonInfos"
import { FiArrowUpRight } from 'react-icons/fi'

const CardOne = ({image,title}) => {
  return (
    <section className="w-[94%] h-96 rounded-lg lg:w-96  bg-center bg-cover object-cover hover:object-scale-down" style={{backgroundImage: `url(${image})`,objectFit: 'cover',alignSelf:'center',width:`${100}`}}>
      <div className='text-center w-[100%] h-[100%] flex flex-col justify-end  p-10  '>
        <h1 className='text-left text-white hover:text-[#fc7000] font-bold mt-2 mb-2 hover:cursor-pointer text-2xl'>
            {title}
        </h1>
        <hr className='w-[100%] text-[#edac95] h-2'></hr>
        <div className='flex flex-row gap-2'>
        <ButtonInfos/>
        </div>
      </div>
    </section>
  )
}

export default CardOne