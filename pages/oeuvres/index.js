import React, { useEffect, useState} from 'react'
import {Section1, Section2} from '../../components/pages/oeuvres/elements'
import  Layout_Oeuvre  from '../../layouts/Layout'
import Footer from '../../components/layouts/footer'
import SidebarOeuvre from '../../components/Oeuvres/Sidebar_Oeuvres';
import NavbarOeuvre from '../../components/Oeuvres/Navbar_Oeuvre';
import Card_two from '../../components/elements/Card_two';
import { Space, Table, Tag } from 'antd';
import { Allvisites, Valide } from '@/functions'; 
import { recupereStorage } from '@/functions';
import {Button} from 'antd'
import { useStateContext } from '@/context/contextProvider';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import DrawDemande from '@/components/elements/DrawDemande';


const Oeuvres = () => {
  const [open, setOpen]=useState(false);
  const [item,setItem]=useState([])
  const {demandeData,setDemandeData}=useStateContext()
  const columns=[
    {
        title: 'Noms',
        dataIndex: 'noms',
        key:"noms"
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key:"email"
    },
    {
        title: 'Objectif',
        dataIndex: 'objectif',
        key:"objectif"
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, recorditem, index) => (
          <Space size="middle">
              <Button href={'#'} className={recorditem?.status ?`text-green-500`:`text-red-400`} onClick={() => {
                  setOpen(true);
                  setItem(recorditem);
              }}
                disabled={recorditem?.status}
              >
                  {recorditem?.status ?"Passee":"Validee cette Demande" }
                 
              </Button>
              <DrawDemande opens={open} setOpen={setOpen} item={item}/>
          </Space>
      ),
  },
]

const loadData=async()=>{
  let result=await toast.promise(axios.get(`${process.env.NEXT_PUBLIC_URL}demande/getalldemande`),{
    loading:"Loading...",
    success:"Data dowloaded success !",
    error:"Error on server "
  })

  setDemandeData(result?.data.data);
  
}


// const ValidateData=async()=>{
//   let result=await toast.promise(axios.get(`${process.env.NEXT_PUBLIC_URL}demande/getalldemande`),{
//     loading:"Loading..."
//   })

//   setDemandeData(result?.data.data);
  
//}

useEffect(()=>{ 
  let issend = true;
  loadData();
  return () => {
    issend = false;
  }
},[])


  return (
    <React.Fragment>
      <SidebarOeuvre />
      <div className={'lg:ml-44 flex flex-row  justify-around items-center gap-3 lg:gap-5 p-5 lg:p-10'}>
          <div className={"w-72 h-24 bg-white border border-gray-400 rounded-lg shadow-md flex flex-col justify-around items-center"}><span className={"font-bold text-lg"}>Total Demandes</span><span className="flex flex-row justify-center items-center text-lime-700 text-xl font-bold">{demandeData?.length}</span></div>
          <div className={"w-72 h-24 bg-white border border-gray-400 rounded-lg shadow-md flex flex-col justify-around items-center"}><span className={"font-bold text-lg"}>Demandes Validees</span><span className="flex flex-row justify-center items-center text-orange text-xl font-bold">{demandeData?.filter((item)=>item.status==true).length}</span></div>
          <div className={"w-72 h-24 bg-white border border-gray-400 rounded-lg shadow-md flex flex-col justify-around items-center"}><span className={"font-bold text-lg"}>Demande en Attente..</span><span className="flex flex-row justify-center items-center text-red-400 text-xl font-bold">{demandeData?.filter((item)=>item.status==false).length}</span></div>
      </div>
      <div className={'lg:ml-56 mt-10 flex flex-row flex-wrap justify-center items-center gap-5 mb-5 shadow  w-[85%]'}>
          <Table columns={columns} dataSource={demandeData && demandeData} className={"w-full "} />
      </div>
      <Toaster/>
</React.Fragment>
  )
}

export default Oeuvres