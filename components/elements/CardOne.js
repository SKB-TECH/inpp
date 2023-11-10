import React from 'react'
import ButtonInfos from "../pages/home/elements/ButtonInfos"
import { FiArrowUpRight } from 'react-icons/fi'

const CardOne = ({description,title,icon,color,bgcolor}) => {
  return (
    <section className="w-[94%] h-96 rounded-lg lg:w-72 border border-gray-400  hover:drop-shadow-lg " >
      <div className='text-center w-[100%] h-[100%] flex flex-col justify-center  p-10  items-center '>
      <button
                  type="button"
                  style={{
                    color: color,
                    backgroundColor:bgcolor,
                  }}
                  className="text-2xl opacity-0.9 p-4 rounded-full hover:drop-shadow-xl"
                >
                  {icon}
                </button>
        <h1 className='text-left  font-bold mt-2 mb-2 hover:cursor-pointer text-xl'>
            {title}
        </h1>
        <hr className='w-[100%] text-[#edac95] h-2'></hr>
        <p>
          {description}
        </p>
       
      </div>
    </section>
  )
}

export default CardOne

// bg-cover object-cover hover:object-scale-down

// style={{backgroundImage: `url(${image})`,objectFit: 'cover',alignSelf:'center',width:`${100}`}}