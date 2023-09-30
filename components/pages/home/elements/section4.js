import React from 'react'
import CardCategorie from '../../../elements/CardCategorie'
const Section4 = () => {
  return (
    <section className="flex flex-col justify-around items-center
    min-w-full min-h-full  lg:mt-12 mb-10 ">
        <h1 className='p-2 flex flex-col min-w-full lg:text-4xl min-h-full mb-10 justify-around items-center text-2xl font-bold'>Our best Categories</h1>
        <div className='flex flex-col lg:flex-row flex-wrap justify-around items-center min-w-full min-h-full  mb-10 gap-10'>
          <CardCategorie title={'Gorille de Montagne'} image={'/gorille2.jpg'}/>
          <CardCategorie title={'Gorille de Plaine'} image={'/gorille5.jpg'}/>
          <CardCategorie title={'Famille de Gorilles '} image={'/gorille9.jpg'}/>
        </div>
    </section>
  )
}

export default Section4