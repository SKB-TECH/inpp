import React from 'react'
import SideCategories from './SideCategories'
import OeuvresItems from './OeuvresItems'
import { useRouter } from 'next/router' 


const Section2 = () => {
  const router = useRouter();

  return (
    <section className='d-flex'>
            <SideCategories/>
            <OeuvresItems/>
    </section>
  )
}

export default Section2