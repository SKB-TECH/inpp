import React from 'react'
import ButtonInfos from './ButtonInfos';
import CardOne from '../../../elements/CardOne';
function SectionOne() {
  return (
    <section className="flex flex-col lg:flex-row flex-wrap justify-around items-center
     min-w-full min-h-full  mt-20 mb-10 gap-10">
      <CardOne image={'/gorille11.jpg'} title={'Gorille de Montangne'}/>
      <CardOne image={'/gorille9.jpg'} title={'Gorille plus recherche'}/>
      <CardOne image={'/gorille5.jpg'} title={'Gorille de plus visite'}/>
    </section>
  )
}

export default SectionOne