import React, { useEffect, useState } from 'react';
import { Button, Modal,Form,Input,Spin} from 'antd';
import {login} from '../../functions/index';
import { recupereStorage,ClearStorage,stockageData } from '../../functions/index';
import { useRouter } from 'next/router';
import axios from 'axios'
import {toastOption} from '../../utils/toastOption.js'
import toast, { Toaster } from 'react-hot-toast';
import { useStateContext } from '@/context/contextProvider';

const ConnexionForm= ({opens,setOpens}) => {
  const {setUser}=useStateContext();
  const [Loading,setLoading]=useState(false);
  const router=useRouter()
  const valide=recupereStorage('islog');
  const [agentInput,setAgentInput]=useState({
    email:"",
    password:"",
}); 

const notice=()=>{
  toast.error("Assurez-vous d'avoir rempli tout les champs !!",
  {duration: 2000,
  position: 'top-right'}
  )

  Loading &&  toast.loading('Vueillez Patiente...');
}


const auth=async()=>{
  if(agentInput.email==="" || agentInput.password==""){
    notice()
  }
  
  try {
    const result=await toast.promise(axios.post(`${process.env.NEXT_PUBLIC_URL}compte/user/login`,agentInput,{
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }),{
      loading:"Vueillez Patienter ..",
      success:"Connexion reussie ",
      error: "Erreur Server !!"
    })
  
    result.status===201 && router.push("/oeuvres");
  } catch (error) {
    console.log(error)
  }
}


React.useEffect(()=>{
  const isE=recupereStorage("isExist");
  isE && router.push("/oeuvres");
});



  return (
    <>
      <Modal
        title="Connexion "
        centered
        open={opens}
        onCancel={()=>setOpens(false)}
        width={500}
        footer={
            <div key={10} className={"w-[100%] flex flex-row justify-center "}>
               <Button  className="w-full bg-orange text-white h-10" onClick={auth}> Connexion</Button>
            </div>
        }
      >
        <Form className="w-full">
            <Form.Item className="w-2/2">
                <Input placeholder="Votre addresse email " size={"large"} onChange={(e)=>setAgentInput({...agentInput,email:e.target.value})}/>
            </Form.Item>
            <Form.Item className="w-2/2">
                <Input  className="w-full"  placeholder="Votre mot de passe" size={"large"} onChange={(e)=>setAgentInput({...agentInput,password:e.target.value})}/>
            </Form.Item>
        </Form>
      
      </Modal>
      <Toaster/>
    </>
  );
};

export default ConnexionForm;