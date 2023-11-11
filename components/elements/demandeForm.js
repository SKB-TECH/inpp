import React, { useEffect, useState } from 'react';
import {DatePicker, Form, Input, InputNumber,Button,Modal, AutoComplete} from 'antd';
import axios from 'axios';
import { New_visite } from '@/functions'; 
import { useRouter, useMemo } from 'next/router';
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { ecole } from '@/utils/data';


const modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
        ],
        ['link', 'image', 'video'],
        ['clean'],
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    },
}

const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
]
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
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
        title="Demande de Stage au sein de l'Inpp"
        centered
        open={opens}
        onCancel={()=>setOpens(false)}
        width={900}
        footer={
            <div className={"flex justify-center items-center w-full "}><button
            size="large"
            // options={jobs}
            className="mb-1 w-[96%] h-10 bg-orange text-white mt-2 font-bold rounded-lg"
            placeholder="Post" onClick={sendDemande}
        >Envoyer Ma demande</button>

            </div>
        }
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
      <Form.Item name={'email'} >
          <span className="text-gray-600 ">{"Votre Addresse mail "}</span>
          <Input
              size="large"
              placeholder='Votre addresse mail'
              className="mb-1"
              onChange={(e) => {
                  setDemandeInput({...demandeInput, email: e.target.value})
              }}
          />
      </Form.Item>
      <Form.Item name={'City'} >
          <span className="text-gray-600 ">{"Tu es de quelle Institution "}</span>
          <AutoComplete
              size="large"
              options={ecole}
              className="mb-1"
              onChange={(value) => {
                  setDemandeInput({...demandeInput, institution: value})
              }}
              filterOption={true}
          />
      </Form.Item>
     
      <Form.Item name={'description'}>
          <div className='h-56'>
              <span className="text-gray-600 ">{"Lettre de motivation"}</span>
              <ReactQuill
                modules={modules}
                formats={formats}
                theme="snow"
                // onChange={onChange}
                placeholder="rediger votre lettre ici ...."
                className='h-full mb-5'
                />
          </div>
      </Form.Item>

      <Form.Item name={'poste'} className={"mt-5"} required={true}>
          <span className="text-gray-600 ">{"La date de votre stage"}</span>
          <DatePicker format={dateFormat} size={"large"} className={"w-full"} onChange={onSelectData}/>
      </Form.Item>
         {/* <Form.Item name={'price'} className={"mt-1"}>
          
      </Form.Item> */}
  </Form>
      </Modal>
    </>
  );
};

export default DemandeForm;