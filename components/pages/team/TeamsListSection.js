import React from "react";
import Image from "next/image";

const TeamsListSection = () => {
    const teamList=[
        {
        name:"David Kitenge",
        title:"Senior Full-Stack Developer",
        image:"assets/images/covers/29.jpg"
        },
        {
        name:"BENJAMIN SHAKO",
        title:"Full-Stack Developer",
        image:"assets/images/covers/t2.jpg"
        },
        {
        name:"JONATHAN MULENDA",
        title:"Back-end developer",
        image:"assets/images/covers/23.jpg"
        }
    ]
    return (
        <div className="section-contenair section-contenair-white p-3  ">
            <div
                className="  row text-center pt-4 pb-lg-4 pb-xl-4  mb-0 mb-xl-2 mb-lg-2 title d-flex  align-items-center justify-content-center">
                <h3 className="text-site2">Our Team</h3>
                <div className=" border-titre2"/>
            </div>
            <div className="container-xl container-lg ">

                <div className="row d-flex justify-content-center align-items-center">

                    {
                        teamList.map((item,index)=><div className="col-lg-3 col-xl-3 col-md-6 col-sm-12 col-12 mb-4" key={index}>
                            <div className=" card-team">
                                <div className="car-team-body ">
                                    <Image src={item.image} alt="team"
                                           width={400} height={400}
                                           className="team_image site-circle" placeholder="blur" blurDataURL="assets/images/covers/b.jpg"/>
                                    <h4 className="text-site2 mt-4 text-uppercase">{item.name}</h4>
                                    <p className="text-site fw-bold">{item.title}</p>

                                </div>
                            </div>
                        </div>)
                    }
                </div>

            </div>

        </div>
    )
}

export default TeamsListSection
