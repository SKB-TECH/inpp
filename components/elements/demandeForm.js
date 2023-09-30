import React, { useEffect, useState } from 'react';
import {DatePicker, Form, Input, InputNumber,Button,Modal} from 'antd';
import axios from 'axios';
import { New_visite } from '@/functions'; 
import { useRouter } from 'next/router';
const DemandeForm= ({opens,setOpens}) => {
    // const dispatch = useDispatch<AppDispatch>();
    const [demandeInput,setDemandeInput]=useState({
    email:"",
    type:"",objectif:"",noms:"",dates:""
}); const {TextArea} = Input;


const dateFormat = 'YYYY/MM/DD';

function onSelectData(data, dateString) {
    setDemandeInput({...demandeInput, dates: dateString})
}   
 const sendDemande=()=>{
    New_visite(demandeInput)
    setOpens(false)
}
  return (
    <>
      <Modal
        title="Demande La visite au Parc Kahuzi Biega"
        centered
        open={opens}
        onCancel={()=>setOpens(false)}
        width={900}
        
      ><Form className={'flex flex-col justify-center  lg:w-[52rem] w-[98%] border p-4 rounded-lg shadow-md'}>
      <Form.Item name={'poste'} >
          <span className="text-gray-600 ">{"Votre noms "}</span>
          <Input
              size="large"
              placeholder='Votre nom '
              className="mb-1"
              onChange={(e) => {
                  setDemandeInput({...demandeInput, noms: e.target.value})
              }}
          />
      </Form.Item>
      <Form.Item name={'poste'} >
          <span className="text-gray-600 ">{"La date de votre visite"}</span>
          <DatePicker format={dateFormat} size={"large"} className={"w-full"} onChange={onSelectData}/>
      </Form.Item>
      <Form.Item name={'City'} >
          <span className="text-gray-600 ">{"Votre email addresse "}</span>
          <Input
              size="large"
              // options={jobs}
              className="mb-1"
              onChange={(e) => {
                  setDemandeInput({...demandeInput, email: e.target.value})
              }}
          />
      </Form.Item>
      <Form.Item name={'description'}>
          <div>
              <span className="text-gray-600 ">{"Parlez Nous de l'objectif de votre visite"}</span>
              <TextArea
                  onChange={(e) => {
                      return setDemandeInput({...demandeInput, objectif: e.target.value});
                  }}
                  size="middle"
                  allowClear
                  rows={7}
                  maxLength={100000}
              />
          </div>
      </Form.Item>
    
         <Form.Item name={'price'}>
          <button
              size="large"
              // options={jobs}
              className="mb-1 w-full h-10 bg-orange text-white mt-2 font-bold rounded-lg"
              placeholder="Post" onClick={sendDemande}
          >Envoyer Ma demande</button>
      </Form.Item>
  </Form>
      </Modal>
    </>
  );
};

export default DemandeForm;