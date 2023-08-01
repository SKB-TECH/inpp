import React from 'react'
import Image from 'next/image'
import {AiFillStar,AiOutlineStar,AiFillHeart,AiFillEye} from 'react-icons/ai'
export default function Card_two({images}) {
  return (
    <div className='card'>
        <div className='w-full h-60'>
          <Image src={images} alt={'picture'} width={300} height={200} className={'w-full h-full object-fill'}/>
        </div>
        <div className='p-3 flex flex-col gap-3'>
          <div className="flex items-center gap-2">
              <span className='badge'>Ctg. City</span>
              <span className='badge'>DrCongo</span>
          </div>
          <h2 className='art_title'>Woman Africa</h2>
          <div>
              <span className='text-xl text-bold'>4000 $</span>
              <div className='flex items-center gap-2 mt-1'>
                <span className="text-sm line-through opacity-50">Rp 4000 $</span>
                <span className="discount-percent">Save 20%</span>
              </div>
          </div>
          <span className="flex items-center mt-1">
            <AiFillStar size={25} color={'#e3744a'}/>
            <AiFillStar size={25} color={'#e3744a'}/>
            <AiFillStar size={25} color={'#e3744a'}/>
            <AiFillStar size={25} color={'#e3744a'}/>
            <AiOutlineStar size={25} color={'#e3744a'}/>
            <span className={'ml-2 text-lg text-gray-500'}>20K views</span>
          </span>
          {/* action */}
          <div className={'mt-2 flex gap-3'}>
              <button className="button-primary">
                 Buy Now
              </button>
              <button className='button-icon'>
                <AiFillHeart size={25} className='opacity-50'/>
                <span>20K</span>
              </button>
              <button className='button-icon'>
                <AiFillEye size={25} className='opacity-50'/>
              </button>
          </div>
        </div>
    </div>
  )
}
