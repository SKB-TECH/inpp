import { Col, Container, Row } from "reactstrap";
import React from "react";
import Image from "next/image";
import { IntlContext } from "../../../context/contextProvider";
const TeamCover = () => {
    const { messages } = React.useContext(IntlContext)
    return (
        <div className="site-cover  flex-mobile container  ">
            <Row className="container-fluid-sm">

                <div className="col-12 col-lg-8 col-xl-8  ">
                    <Container className="contenair-cover-home  ">
                        <Row className="container d-flex justify-content-start ">
                            <div className="col-12 col-md-12 d-flex justify-content-start d-lg-none d-xl-none border-bottom  mb-4 pt-4">
                                <Image
                                    src="assets/images/covers/28.png"
                                    alt="cover"
                                    className="cover_home_mobile "
                                    width={50}
                                    height={50}
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto"
                                    }} />
                            </div>
                            <Col xl={10} lg={12} md={12} sm={12} className="mb-5 mb-lg-0 mb-xl-0" >
                                <h1 className="text-cover-home text-site2">{messages['teamPage'].title.part1} <span className="text-white">{messages['teamPage'].title.part2}</span></h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="col-12 col-lg-4 col-xl-4  d-none d-lg-flex d-xl-flex justify-content-end align-items-end  pt-xl-4 pt-lg-4 ">
                    <Image
                        src="assets/images/covers/28.png"
                        alt="cover"
                        className="cover_img  rounded"
                        width={50}
                        height={50} />
                </div>
            </Row>
        </div>
    );
}
export default TeamCover;
