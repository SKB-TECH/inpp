import React from 'react'
import Image from 'next/image'
import {AiFillStar,AiOutlineStar,AiFillHeart,AiFillEye} from 'react-icons/ai'; 
import DemandeForm from './demandeForm';
import photo from '../../public/iconphoto.jpg';




export default function Card_two({arr, prof, ville, nom,temoignage}) { 
  const [open,setOpen]=React.useState(false)
  return (
    <div className='card'>
        <div className='flex flex-row justify-center items-center w-full  rounded-full h-52'>
          <Image src={photo} alt={'picture'} width={300} height={200} className={'w-full h-full object-fill'}/>
        </div>
        <div className='p-3 flex flex-col gap-3'>
          <h5 className={"text-black text-lg font-semibold"}>{nom}</h5>
          <div className="flex items-center gap-2">
              <span className='badge'>{ville}</span>
              <span className='badge'>{prof}</span>
          </div>
          <div className={'mt-2 flex gap-3'}>
              <p>
                {temoignage}
              </p>
              <DemandeForm opens={open} setOpens={setOpen}/>
          </div>
          <span className="flex items-center mt-1">
            {arr.map((item,index)=>(
              <AiFillStar size={20} color={'#e3744a'} key={index}/>
            ))}
            <AiOutlineStar size={20} color={'#e3744a'}/>
            {/* <span className={'ml-2 text-lg text-gray-500'}>20K visite/annee</span> */}
          </span>
          {/* action */}
        </div>
    </div>
  )
}
