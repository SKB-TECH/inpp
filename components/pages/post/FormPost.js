import React from 'react';
import {DatePicker, Form, Input, InputNumber,Button} from 'antd';
import {AiFillDelete, AiFillPlusCircle} from "react-icons/ai";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import {MdCloudUpload, MdDelete} from "react-icons/md";
import {AiFillFileImage} from "react-icons/ai";


const Editeur = ({offreInput, setOffreInput, handlIsValid}) => {
    const {TextArea} = Input;
    const [fileName, setFileName] = React.useState()
    const [doc, setDoc] = React.useState()
    const getNombre = (valuer) => {
        setOffreInput({...offreInput, nombre: value})
    }

    const getSalaire = (value) => {
        setOffreInput({...offreInput, salaire: value})
    }
    const dateFormat = 'YYYY/MM/DD';

    function onSelectData(data, dateString) {
        setOffreInput({...offreInput, limite: dateString})
    }

    const [country,setCountry]=React.useState('')
// conditions
    return (
        <Form className={'flex flex-col justify-center  lg:w-[52rem] w-[98%] border p-4 rounded-lg shadow-md'}>
            <Form.Item name={'poste'} rules={[{required: true, message: 'Veuillez completer ce champ !!!'}]}>
                <span className="text-gray-600 ">{"Title of Art"}</span>
                <Input
                    size="large"
                    // options={jobs}
                    className="mb-1"
                    onChange={(value) => {
                        setOffreInput({...offreInput, poste: value})
                    }}
                />
            </Form.Item>
            <Form.Item name={'poste'} rules={[{required: true, message: 'Veuillez completer ce champ !!!'}]}>
                <span className="text-gray-600 ">{"Applies to Country"}</span>
                <CountryDropdown classes='drop' value={country}  onChange={(val) => setCountry(val)}/>
            </Form.Item>
            <Form.Item name={'description'} rules={[{required: true, message: ''}]}>
                <div>
                    <span className="text-gray-600 ">{"Tell us about Art"}</span>
                    <TextArea
                        onChange={(e) => {
                            return setOffreInput({...offreInput, desoffre: e.target.value});
                        }}
                        size="middle"
                        allowClear
                        rows={7}
                        maxLength={100000}
                    />
                </div>
            </Form.Item>
            <Form.Item name={'price'} rules={[{required: true, message: 'Veuillez completer ce champ !!!'}]}>
                <span className="text-gray-600 ">{"Price of Art"}</span>
                <InputNumber
                    size="large"
                    // options={jobs}
                    className="mb-1 w-full"
                    onChange={(value) => {
                        setOffreInput({...offreInput, prix: value})
                    }}
                />
            </Form.Item>
               <div className={'w-full flex flex-col justify-center items-center border-2 border-dashed h-52 rounded-lg'}
                  onClick={() =>{
                    //@ts-ignore
                    document.querySelector(".input-field").click()
                  }}>
                     <input type={'file'} multiple={false} className={'w-full input-field'}
                           onChange={

                               ({target: {files}}) => {
                                   //@ts-ignore
                                   files[0] && setFileName(files[0]?.name)
                                   if (files) {
                                       setDoc(files[0])
                                   }
                               }
                           }
                           style={{opacity: 0}}/>
                    <MdCloudUpload size={90} color={'#e3744a'}
                                   className={'flex flex-col justify-center items-center'}/>
                    <span className={'text-center text-lg font-semibold'}>{fileName}</span>
               </div>
               <Form.Item name={'price'} rules={[{required: true, message: 'Veuillez completer ce champ !!!'}]}>
                <button
                    size="large"
                    // options={jobs}
                    className="mb-1 w-full h-10 bg-orange text-white mt-2 font-bold rounded-lg"
                    placeholder="Post"
                >Sell My Art</button>
            </Form.Item>
        </Form>
  );
};
export default Editeur;