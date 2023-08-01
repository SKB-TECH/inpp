import React from 'react'
import ButtonInfos from './ButtonInfos';
import CardOne from '../../../elements/CardOne';
function SectionOne() {
  return (
    <section className="flex flex-col lg:flex-row flex-wrap justify-around items-center
     min-w-full min-h-full  mt-20 mb-10 gap-10">
      <CardOne image={'/gal6.jpg'} title={'Best art of the month'}/>
      <CardOne image={'/gal5.jpg'} title={'Oeuvre chere'}/>
      <CardOne image={'/gal2.jpg'} title={'summer sales'}/>
    </section>
  )
}

export default SectionOne