import React, { useState } from "react";
import { Modal, ModalHeader } from "reactstrap";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import BrushIcon from "@mui/icons-material/Brush";
import CodeIcon from "@mui/icons-material/Code";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Services.css';
import ModalView from "./ModalView";
import { Hidden } from "@mui/material";

function Services(props) {
  const [modal, setModal] = useState(false);
  const [modalDetail, setModalDetail] = useState('');

  const services = [
    {
      logo: <DesignServicesIcon/>,
      service: "UI/UX",
      description: "I develop UI/UX",
    },
    {
      logo: <CodeIcon/>,
      service: "Front-end Development",
      description: "I am a Front End Developer",
    },
    {
      logo: <BrushIcon/>,
      service: "Branding",
      description: "I can do Branding",
    },
  ];


  function ModalView(){
    return (
      <Modal size="lg" isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>
                {modalDetail}
          </ModalHeader>
      </Modal>
    );
  }

  function ServiceContainer() {
    return (
      <div className="service-container" id={props.aref}>
        {services.map(({service,logo,description}, index) => (
          
            <div key={index} className="service-box">
            <div className="service-data-wrapper">
              <div className="service-data">
                <p>{logo}</p>
                <p>{service}</p>
              </div>
              <button className="modalButton" onClick={() => {setModal(true); setModalDetail(description)}}>
              View more <ArrowForwardIcon/>
              </button>
            </div>
          </div>
          
          
        ))}
      </div>
    );
  }

  

  return (
    <section className="section5" id={props.aref}>
      <div className="container">
        <div className="heading">
          <p>Services</p>
          <span>My Services</span>
        </div>
        <ModalView/>
        <ServiceContainer />
      </div>
    </section>
  );
}

export default Services;

