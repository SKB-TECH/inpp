import React from 'react'
import ButtonInfos from './ButtonInfos';
import CardOne from '../../../elements/CardOne';
import { TaskData } from '@/data/task';


function SectionOne() {
  return (
    <section className="flex flex-col  flex-wrap justify-around items-center
     min-w-full min-h-full  lg:mt-24 gap-10 mt-14">
      <h3>Nos Formations</h3>
      <div>
        <p className={"text-center text-[16px]"}>
        L’INPP propose deux types de formation basés sur les compétences technique et scientifique pour relever les défis d’aujourd’hui et demain :

S’adresse aux personnes sans emploi, jeunes sortis du système scolaire, population vulnérables ou aux personnes en reconversion professionnelle pour apprendre un METIER et initiation à la création d’entreprise.
        </p>
      </div>
      <div className={"flex flex-col lg:flex-row gap-20 justify-between  w-full h-full"}>
            {
              TaskData.map((item,index)=>(
                <CardOne  title={item.title} icon={item.icon} color={item.iconColor} bgcolor={item.iconBg} description={item.description}/>
              ))
            }
      </div>
    </section>
  )
}

export default SectionOne