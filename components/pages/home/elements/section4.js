import React from 'react'
import CardCategorie from '../../../elements/CardCategorie'
const Section4 = () => {
  return (
    <section className="flex flex-col justify-around items-center
    min-w-full min-h-full  lg:mt-20 mb-10 -mt-32">
        <h1 className='p-2 flex flex-col min-w-full lg:text-4xl min-h-full mb-10 justify-around items-center text-2xl font-bold'>Our best Categories</h1>
        <div className='flex flex-col lg:flex-row flex-wrap justify-around items-center min-w-full min-h-full  mb-10 gap-10'>
          <CardCategorie title={'City'} image={'/gal6.jpg'}/>
          <CardCategorie title={'Country'} image={'/gal4.jpg'}/>
          <CardCategorie title={'Africa'} image={'/gal2.jpg'}/>
        </div>
    </section>
  )
}

export default Section4