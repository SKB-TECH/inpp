import React, { useEffect, useState } from 'react';
import { Button, Modal,Form,Input,Spin} from 'antd';
import {login} from '../../functions/index';
import { recupereStorage,ClearStorage,stockageData } from '../../functions/index';
import { useRouter } from 'next/router';
import axios from 'axios'

const ConnexionForm= ({opens,setOpens}) => {
  const router=useRouter()
  const valide=recupereStorage('islog');
 const [isloading,setLoading]=useState(false);
    const [agentInput,setAgentInput]=useState({
    email:"",
    password:"",
}); 

const auth=async()=>{
  try {
    const BASIC_URL = String(process.env.NEXT_PUBLIC_BASE_URL);
    const reponse = await axios.post(`${BASIC_URL}compte/user/login`, agentInput,{
        headers:{
          'Accept': 'application/json'
      }
    })
    const is=true;
    if( reponse.data.success) {
      router.push("/oeuvres")
      setLoading(false);
      setOpens(false)
      stockageData('islog',true)
    }
    else{
        stockageData('isExist',!is)
    }
    return reponse.data;
} catch (error) {
    console.log(error)
}
}; 
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
                {isloading ?(<Spin className='text-orange'/>):<Button  className="w-full bg-orange text-white h-10" onClick={auth}> Connexion</Button>}
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
    </>
  );
};

export default ConnexionForm;