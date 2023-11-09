import {Col, Container, Row} from "reactstrap";
import React,{useContext} from "react";
import Image from "next/image";
import { IntlContext } from "../../../../context/contextProvider";
const AboutCover = () => {

    const { messages} = useContext(IntlContext);

    return (
        <div className="site-cover  flex-mobile container  ">
        <Row className="container-fluid-sm">

            <div className="col-12 col-lg-8 col-xl-8  ">
                <Container  className="contenair-cover-home  ">
                    <Row className="container d-flex justify-content-start ">
                        <div className="col-12 col-md-12 d-flex justify-content-start d-lg-none d-xl-none border-bottom  mb-4 pt-4">
                                <Image
                                    src="/assets/logos/logo.jpg"
                                    alt="cover"
                                    className="cover_home_mobile "
                                    width={50}
                                    height={50}
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto"
                                    }} />
                        </div>
                        <Col xl={10} lg={12} md={12} sm={12}  className="" >
                            <h1 className="text-cover-home text-site2">{messages['aboutPage'].title.part1} <span className="text-white">{messages['aboutPage'].title.part2}</span></h1>
                            <h1 className="text-cover-home ">{messages['aboutPage'].title.part3}<span className="text-site2">{messages['aboutPage'].title.part4}</span> </h1>
                        </Col>


                    </Row>
                </Container>
            </div>
            <div className="col-12 col-lg-4 col-xl-4  d-none d-lg-flex d-xl-flex justify-content-end align-items-end  pt-xl-2 pt-lg-2 ">

                    <Image
                        src="/assets/logos/logo.jpg"
                        alt="cover"
                        className="cover_img"
                        width={30}
                        height={30} />
            </div>
        </Row>
        </div>
    );
}
export default AboutCover;
