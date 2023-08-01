import React from 'react'
import ButtonInfos from "../pages/home/elements/ButtonInfos"
import { FiArrowUpRight } from 'react-icons/fi'

const CardCategorie = ({image,title}) => {
  return (
    <section className="w-[94%] h-96 rounded-lg lg:w-96  bg-center bg-cover object-cover hover:object-scale-down hover:shadow-2xl" style={{backgroundImage: `url(${image})`,objectFit: 'cover',alignSelf:'center',width:`${100}`}}>
      <div className='text-center w-[100%] h-[100%] flex flex-col justify-end  p-10  '>
        <h1 className='text-center text-white hover:text-orange  mt-2 mb-2 hover:cursor-pointer text-4xl'>
            {title}
        </h1>
        <hr className='w-[100%] text-[#edac95] h-2'></hr>
      </div>
    </section>
  )
}

export default CardCategorie