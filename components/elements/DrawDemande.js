import React, { useState, useEffect } from 'react';
import { Drawer, Spin, Space, Tag } from 'antd';
import { BsThreeDots, BsWhatsapp } from 'react-icons/bs';
import { MdOutlineEmail, MdOutlineLocationOn } from 'react-icons/md'
import { useRouter } from 'next/router';
import Image from 'next/image'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const DrawDemande = ({ opens, setOpen,item }) => {
  const [open, setOpens] = useState(false)
  const router = useRouter()

  const onClose = () => {
    setOpen(false);
  };
  
  const postulerFunction = async() => {
    let result=await toast.promise(axios.put(`${process.env.NEXT_PUBLIC_URL}demande/valide_demande/${item?.iddemande}`),{
      loading:"Loading...",
      success:"Demande Valide Avec success !",
      error:"Error on server "
    })

    if(result.status==201){
      onClose();
      router.reload();
    }
  }
  return (
    <>
      <Drawer
        title={
          <div className="flex flex-row justify-start  gap-5">
            <button className="w-24 lg:w-44 h-10 bg-orange text-white font-bold outline-none px-2 py-2 text-center rounded-lg" onClick={postulerFunction}>
              {"Valide la demande"}
            </button>
  
          </div>
        }
        placement="right"
        size={'large'}
        onClose={()=>setOpens(false)}
        width={1000}
        open={opens}
        closeIcon={false}
        extra={
          <Space>
            <div key={1}>
              <button className="bg-red-500 h-10 w-24 text-white font-bold outline-none px-2 py-2 text-center rounded-lg" onClick={onClose}>
                Annuler
              </button>
            </div>
          </Space>
        }
      >
          <div className={"flex flex-col h-full w-fulll"}>
            <div className={"flex flex-col border px-2 py-2 rounded-lg border-gray-400 mt-3 mb-10"}>
              <div className={"flex flex-row gap-24 items-center "}>
                <div className={"flex flex-col gap-2"}>
                  <h4 className={"font-bold text-ld uppercase "}>{"IDENTITE"}</h4>
                  <span className={"text-sm "}>Noms: {item?.noms}</span>
                  <span className={"text-sm "}>Email: {item?.email}</span>
                  <span className={"text-sm "}>Provenave: {item?.institution}</span>
                  <span className={"text-sm "}>Objectif: {item?.objectif}</span>
                </div>
                <h5 className={"text-lg text-orange font-bold"}>Debut de Stage Prevu: {item?.dates}</h5>
              </div>
            </div>
            <hr className="bg-gris mt-2 mb-2"></hr>
            <div className={"flex flex-col border px-2 py-2 rounded-lg border-gray-400"}>
              <h6 className={"text-lg font-semibold mb-2 underline"}>{"Lettre de motivation: "}</h6>
              <div dangerouslySetInnerHTML={{ __html:item?.description}}></div>
            </div>

           
          </div>
      </Drawer>
    </>
  );
};

export default DrawDemande;