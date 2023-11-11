import React, { useState, useEffect } from 'react';
import { Drawer, Spin, Space, Tag } from 'antd';
import { BsThreeDots, BsWhatsapp } from 'react-icons/bs';
import { MdOutlineEmail, MdOutlineLocationOn } from 'react-icons/md'
import Login from '@/Modals/users/Compte/Login';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/configuration/store/store";
import { stockageData, recupereStorage } from "@/configuration/LocalStorage/Stockage";
import { offreService } from "@/configuration/services/entreprise/offre.service";
import { useRouter } from 'next/router';
import avatar1 from "@/public/logosrb.png";
import Image from 'next/image'







const DrawOffre = ({ opens, setOpen, idoffre }: any) => {

  const [open, setOpens] = useState(false);
  const { token, role } = useSelector((state: RootState) => state.utils);
  const dispatch = useDispatch<AppDispatch>();
  const { offreDetail, statusOffre, message } = useSelector((state: RootState) => state.offre);
  const { candidatProfile } = useSelector((state: RootState) => state.candidat);
  const router = useRouter()


  const onClose = () => {
    setOpen(false);
  };

  const postulerFunction = () => {
    if (!candidatProfile && !token) {
      setOpens(true);
    }

    router.push({
      pathname: role == "candidat" ? "/entreprise/offre/soumission" : "/entreprise/offre/nouvelle",
      query: {
        idoffre: idoffre
      }
    })
  }
  return (
    <>
      <Drawer
        title={
          <div className="flex flex-row justify-start  gap-5">
            <button className="w-24 lg:w-44 h-10 bg-blue_ciel text-white font-bold outline-none px-2 py-2 text-center rounded-lg" onClick={postulerFunction}>
              {role === "candidat" ? "Postuler" : "Modifier"}
            </button>
            <span className="w-10 h-10 bg-gris flex flex-row justify-center items-center rounded-full text-blue_ciel hover:cursor-pointer">
              <BsThreeDots size={20} />
            </span>
            <span className="w-10 h-10 bg-gris flex flex-row justify-center items-center rounded-full text-blue_ciel hover:cursor-pointer">
              <MdOutlineEmail size={20} />
            </span>
            <span className="hidden w-10 h-10 bg-gris lg:flex flex-row justify-center items-center rounded-full text-blue_ciel hover:cursor-pointer">
              <BsWhatsapp size={20} />
            </span>
          </div>
        }
        placement="right"
        size={'large'}
        onClose={onClose}
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
        {statusOffre.isLoading ? (<div className={"flex flex-col justify-center items-center "}><Spin /></div>) :
          (<div className={"flex flex-col h-full w-fulll"}>
            <div className={"flex flex-row justify-between w-full"}>
              <div className={"flex flex-col justfiy-center gap-5 "}>
                <h2 className="font-bold text-3xl">{offreDetail?.dataValues?.poste}</h2>
                <h5 className={"uppercase text-[14px] font-semibold "}>Lieu : {offreDetail?.dataValues?.lieu}</h5>
                <div className={"flex flex-row  justify-around  gap-5 "}>
                  <Tag bordered={false} color="processing" >Contrat : {offreDetail?.dataValues?.contrat}</Tag>
                  <Tag bordered={false} color="processing" >Salaire  : {offreDetail?.dataValues?.salaire} $</Tag>
                  <Tag bordered={false} color="processing" > Temps : {offreDetail?.dataValues?.temps}</Tag>
                  <Tag bordered={false} color="processing" >Mode de Travail  : {offreDetail?.dataValues?.location}</Tag>
                </div>
                <h5 className={"text-blue_ciel"}>Date Limite {offreDetail?.dataValues?.limite}</h5>
              </div>
            </div>
            <hr className="bg-gris mt-2 mb-2"></hr>
            <div className={"flex flex-col border px-2 py-2 rounded-lg border-gray-400"}>
              <h6 className={"text-lg font-semibold mb-2 underline"}>{"Description Offre : "}</h6>
              <div dangerouslySetInnerHTML={{ __html: offreDetail?.dataValues?.desoffre }}></div>
            </div>
            <div className={"flex flex-col mt-4 border px-2 py-2 rounded-lg border-gray-400"}>
              <h6 className={"text-lg font-semibold mb-2 underline"}>{"Description Profile : "}</h6>
              <div dangerouslySetInnerHTML={{ __html: offreDetail?.dataValues?.desprofile }}></div>
            </div>

            <div className={"flex flex-col border px-2 py-2 rounded-lg border-gray-400 mt-3 "}>
              <h6 className={"text-lg font-semibold mb-2 underline"}>{"Responsabilites : "}</h6>
              <ul className={"list-disc ml-24"}>
                {
                  offreDetail?.dataValues?.responsabilite.map((item: any, index: number) => (
                    <li key={index}>{item}</li>
                  ))
                }
              </ul>
            </div>

            <div className={"flex flex-col border px-2 py-2 rounded-lg border-gray-400 mt-3"}>
              <h6 className={"text-lg font-semibold mb-2 underline"}>{"Conditions : "}</h6>
              <ul className={"list-disc ml-24"}>
                {
                  offreDetail?.dataValues?.condition.map((item: any, index: number) => (
                    <li key={index}>{item}</li>
                  ))
                }
              </ul>
            </div>

            <div className={"flex flex-col border px-2 py-2 rounded-lg border-gray-400 mt-3 mb-10"}>
              <h6 className={"text-lg font-semibold mb-2 underline"}>{"Entreprise : "}</h6>
              <div className={"flex flex-row gap-24 items-center "}>
                <Image
                  src={!offreDetail?.entrepprise ? avatar1 : offreDetail?.entrepprise?.logo}
                  width={90}
                  height={90}
                  alt={"avatar"}
                  className={"rounded-lg"}
                />
                <div className={"flex flex-col gap-2"}>
                  <h4 className={"font-bold text-ld uppercase "}>{offreDetail?.entrepprise?.denomination}</h4>
                  <span className={"text-sm "}>{offreDetail?.entrepprise?.type}</span>
                  <span className={"text-sm "}>{offreDetail?.entrepprise?.secteur}</span>
                  <span className={"text-sm "}>{offreDetail?.entrepprise?.marque}</span>
                  <span className={"text-sm "}>{offreDetail?.entrepprise?.taille}</span>
                </div>
              </div>
            </div>
          </div>)
        }
        <Login open={open} setOpen={setOpens} />
      </Drawer>
    </>
  );
};

export default DrawOffre;