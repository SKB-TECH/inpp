import {Col, Container, Row} from "reactstrap";
import React from "react";
import Image from "next/image";
import { IntlContext } from "../../../context/contextProvider";
const AboutCover = () => {
    const {messages}=React.useContext(IntlContext);

    return (
        <div className="site-cover  flex-mobile container  ">
        <Row className="container-fluid-sm">

            <div className="col-12 col-lg-7 col-xl-7  ">
                <Container  className="contenair-cover-home  ">
                    <Row className="container d-flex justify-content-start ">
                        <div className="col-12 col-md-12 d-flex justify-content-start d-lg-none d-xl-none border-bottom  mb-4 ">
                                <Image
                                    src="assets/images/covers/25.png"
                                    alt="cover"
                                    className="cover_home_mobile   "
                                    width={50}
                                    height={50}
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto"
                                    }} />
                        </div>
                        <Col xl={10} lg={12} md={12} sm={12}  className="" >
                            <h1 className="text-cover-home text-color-site">{messages['contactPage'].title.part1}</h1>
                            <h1 className="text-cover-home text-site2">{messages['contactPage'].title.part2}</h1>
                            <h1 className="text-cover-home text-site2">{messages['contactPage'].title.part3} <span className="text-color-site">{messages['contactPage'].title.part4}</span> </h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="col-12 col-lg-5 col-xl-5  d-none d-lg-flex d-xl-flex justify-content-end align-items-end  pt-xl-0 pt-lg-0 ">
                    <Image
                        src="assets/images/covers/25.png"
                        alt="cover"
                        className="cover_img  bg-white site-circle"
                        width={50}
                        height={50} />
            </div>
        </Row>
        </div>
    );
}
export default AboutCover;
