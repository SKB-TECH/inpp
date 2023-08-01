import React, {useState} from "react";
import Image from "next/image";
import {IoSend} from "react-icons/io5";
import  {localApi} from "../../../utils/axios";
import {toast} from "react-toastify";
import { Spinner} from "reactstrap";
import { IntlContext } from "../../../context/Internationalization";

const ContactSectionOne= () => {
    const {messages}=React.useContext(IntlContext);

    const initialdData = {
        name:"",
        email:"",
        message:""
    }
    const [dataForm, setDataForm] = useState(initialdData)
    const [isLoading, setIsloading] = useState(false)

    const handleSubmit = async () => {
        console.log('Sending')
        setIsloading(true)
        await localApi.post('api/contact',dataForm).then((response)=>{
            toast.success(response?.data?.msg, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setDataForm(initialdData)
        }).catch((err)=>{
            console.log("err",err.response.data)
            toast.error(err?.response?.data?.msg, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }).finally(()=>{
            setIsloading(false)
        })

    }
    return (
        <div className="section-contenair section-contenair-white p-3 ">
            <div
                className="  row text-center pt-4 pb-lg-4 pb-xl-4  mb-0 mb-xl-2 mb-lg-2 title d-flex  align-items-center justify-content-center">
                <h3 className="text-site2">{messages['contactPage'].form.title}</h3>
                <div className=" border-titre2"/>
                <p className="text-site2 fw-bold"> {messages['contactPage'].title.subtitle}</p>

            </div>
            <div className="container-xl container-lg">
                <div className="row p-3 align-items-center justify-content-center">

                    <div className="col-12 pt-3 pt-lg-0 pt-xl-0 col-lg-5 col-xl-5 align-items-md-end justify-content-md-center d-md-flex">
                        <div className="image-container-2">
                            <Image
                                src="assets/images/covers/27.jpg"
                                alt="suppe"
                                className="img-fluid-site image-sharp1 rounded image-2"
                                fill
                                sizes="100vw" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-7 col-xl-7 mt-5 mt-xl-0 mt-lg-0">
                        <div className="row">
                            <div className="col-12 col-lg-6 col-xl-6 mb-3">
                                <div className="form-group">
                                    <input type="text" name="name" value={dataForm.name}
                                           onChange={e=>{
                                               setDataForm({
                                                   ...dataForm,
                                                   name: e?.target.value
                                               })
                                           }}
                                           className="form-control form-control-site" id="name" placeholder="Enter your name"/>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-6 mb-3">
                                <div className="form-group">
                                    <input type="text" value={dataForm.email}
                                           onChange={e=>{
                                               setDataForm({
                                                   ...dataForm,
                                                   email: e?.target.value
                                               })
                                           }}
                                           className="form-control form-control-site " name="email" id="email" placeholder="Enter your Email"/>
                                </div>
                            </div>
                            <div className="col-12 mb-3">
                                <div className="form-group">
                                    <textarea className="form-control text-area-site form-control-site" name="message" value={dataForm.message} placeholder="Type your text"
                                              onChange={e=>{
                                                  setDataForm({
                                                      ...dataForm,
                                                      message: e?.target.value
                                                  })
                                              }}
                                    />
                                </div>
                            </div>
                            <div className="col-12  ">
                                <div className="form-group  d-flex justify-content-end">
                                    {isLoading
                                        ?
                                        <button className={`${isLoading?"btn-site-disable":"btn-site"}`} onClick={handleSubmit} disabled> <Spinner size="sm">
                                            Loading...
                                        </Spinner>
                                            <span>
                                            {' '}Sending
                                          </span>
                                        </button>
                                        :
                                        <button className="btn-site" onClick={handleSubmit}>{messages['contactPage'].form.btn} <IoSend/></button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}
export default ContactSectionOne
