import React, { useEffect, useState} from 'react'
import SidebarOeuvre from '../../components/Oeuvres/Sidebar_Oeuvres';
import { Table} from 'antd';
import {AiOutlinePlus} from "react-icons/ai"
import { useStateContext } from '@/context/contextProvider';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import New_Affectation from '@/components/elements/New_Affectation';


const Affectation = () => {
  const [open, setOpen]=useState(false);
  const [item,setItem]=useState([])
  const {demandeData,setDemandeData,affectationData,setAffectationData}=useStateContext()
  const columns=[
    {
        title: 'Noms',
        dataIndex: 'email',
        key:"email"
    },
    {
        title: 'Servie',
        dataIndex: 'service',
        key:"service"
    },
    {
        title: 'Debut',
        dataIndex: 'datesDebut',
        key:"datesDebut"
    },
    {
        title: 'Fin',
        dataIndex: 'datesFin',
        key:"datesFin"
    },
    
]

const loadData=async()=>{
  let result=await toast.promise(axios.get(`${process.env.NEXT_PUBLIC_URL}affectation/getAffectation`),{
    loading:"Loading...",
    success:"Data dowloaded success !",
    error:"Error on server "
  })

  setAffectationData(result?.data.data);
  
}


// const ValidateData=async()=>{
//   let result=await toast.promise(axios.get(`${process.env.NEXT_PUBLIC_URL}demande/getalldemande`))

//   setDemandeData(result?.data.data);
  
// }

useEffect(()=>{ 
  let issend = true;
//   ValidateData();
  loadData();
  return () => {
    issend = false;
  }
},[])


  return (
    <React.Fragment>
      <SidebarOeuvre />
      <div className={'lg:ml-44 flex flex-row  p-5 lg:p-10'}>
          <button className={"bg-red-400 h-10 w-56 text-white flex items-center gap-2 p-2 hover:shadow-lg rounded-lg font-bold "} onClick={()=>setOpen(true)}>
           <AiOutlinePlus className={"font-bold text-white "}/>
            Nouvelle Affectation
          </button>
      </div>
      <div className={'lg:ml-56 flex flex-row flex-wrap justify-center items-center gap-5 mb-5 shadow  w-[85%]'}>
          <Table columns={columns} dataSource={affectationData && affectationData} className={"w-full "} />
      </div>
      <New_Affectation opens={open} setOpens={setOpen}/>
      <Toaster/>
</React.Fragment>
  )
}

export default Affectation