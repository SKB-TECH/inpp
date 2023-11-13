import React, { useEffect, useState } from 'react';
import { Button, Modal,Form,Input,AutoComplete,DatePicker} from 'antd';
import {login} from '../../functions/index';
import { recupereStorage,ClearStorage,stockageData } from '../../functions/index';
import { useRouter } from 'next/router';
import axios from 'axios'
import {toastOption} from '../../utils/toastOption.js'
import toast, { Toaster } from 'react-hot-toast';
import { useStateContext } from '@/context/contextProvider';
import { service } from '@/data/task';


const New_Affectation= ({opens,setOpens}) => {
const {demandeData,setDemandeData,affectationData,setAffectationData}=useStateContext()
const router=useRouter()

const [agentInput,setAgentInput]=useState({
    email:"",
    datesDebut:"",
    datesFin:"",
    service:""
}); 

function onSelectDataDebut(data, dateString) {
    setAgentInput({...agentInput, datesDebut: dateString})
} 
function onSelectDataFin(data, dateString) {
    setAgentInput({...agentInput, datesFin: dateString})
} 

const notice=()=>{
  toast.error("Assurez-vous d'avoir rempli tout les champs !!",
  {duration: 2000,
  position: 'top-right'}
  )
}


const auth=async()=>{
  if(agentInput.email==="" || agentInput.service==""|| agentInput.datesDebut==""|| agentInput.datesFin==""){
    notice()
  }
  
  try {
    const result=await toast.promise(axios.post(`${process.env.NEXT_PUBLIC_URL}affectation/new_affectaion`,agentInput,{
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }),{
      loading:"Vueillez Patienter ..",
      success:"Stagiare Affecte !!",
      error: "Erreur Server !!"
    })
  
    result.status===201 && router.reload();
  } catch (error) {
    console.log(error)
  }
}

const loadData=async()=>{
    let result=await toast.promise(axios.get(`${process.env.NEXT_PUBLIC_URL}demande/getalldemande`),{
      loading:"Loading...",
      success:"Data dowloaded success !",
      error:"Error on server "
    })
  
    setDemandeData(result?.data.data);
    
  }

React.useEffect(()=>{ 
    let issend = true;
  //   ValidateData();
    loadData();
    return () => {
      issend = false;
    }
  },[])


  const stagiare=(demandeData.filter((item)=>item.status==true).map((item)=>({
                    value:item.noms,
                    label:item.noms
  })));

  
  return (
    <>
      <Modal
        title="Nouvelle Affectation"
        centered
        open={opens}
        onCancel={()=>setOpens(false)}
        width={500}
        footer={
            <div key={10} className={"w-[100%] flex flex-row justify-center "}>
               <Button  className="w-full bg-orange text-white h-10" onClick={auth}> Affecter</Button>
            </div>
        }
      >
        <Form className="w-full">
            <Form.Item className="w-2/2">
                <AutoComplete placeholder="Stagiaire" size={"large"} options={stagiare} filterOption={true} onChange={(value) => {
                  setAgentInput({...agentInput,email: value})
              }}/>
            </Form.Item>
            <Form.Item className="w-2/2">
                <AutoComplete  className="w-full" options={service} filterOption={true} placeholder="Dans quel service " size={"large"} 
                    onChange={(value) => {
                        setAgentInput({...agentInput, service: value})
                    }}
                />
            </Form.Item>
            <Form.Item className="w-2/2">
                <DatePicker  className="w-full"  placeholder="Date Debut" size={"large"} onChange={onSelectDataDebut} />
            </Form.Item>
            <Form.Item className="w-2/2">
                <DatePicker  className="w-full"  placeholder="Date Fin" size={"large"} onChange={onSelectDataFin}/>
            </Form.Item>
        </Form>
      
      </Modal>
      <Toaster/>
    </>
  );
};

export default New_Affectation;