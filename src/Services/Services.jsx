import React, { useState } from "react";
import { Modal, ModalHeader } from "reactstrap";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import BrushIcon from "@mui/icons-material/Brush";
import CodeIcon from "@mui/icons-material/Code";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Services.css';

function Services(props) {
  const [modal, setModal] = useState(false);

  const services = [
    {
      logo: "DesignServicesIcon",
      service: "UI/UX",
      description: "I develop the user interface UI/UX",
    },
    {
      logo: "CodeIcon",
      service: "Front-end Development",
      description: "I develop the user interface Front End",
    },
    {
      logo: "BrushIcon",
      service: "Branding",
      description: "I develop the user interface Branding",
    },
  ];

  function ServiceContainer() {
    return (
      <div className="service-container" id={props.aref}>
        {services.map((i, index) => (
          
          <div key={index} className="service-box">
            <div className="service-data-wrapper">
              <div className="service-data">
                <p>
                  {i.service}
                </p>
              </div>
              <button className="modalButton" onClick={() => setModal(true)}>
              View more <ArrowForwardIcon/>
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }

  function ModalView() {
    return (
      <Modal size="lg" isOpen={modal} toggle={() => setModal(!modal)}>
        {services.map((i, index) => (
          <>
            <ModalHeader key={index} toggle={() => setModal(!modal)}>
              {i.description}
            </ModalHeader>
          </>
        ))}
      </Modal>
    );
  }

  return (
    <section className="section5" id="services">
      <div className="container">
        <div className="heading">
          <p>Services</p>
          <span>My Services</span>
        </div>
        <ModalView />
        <ServiceContainer />
      </div>
    </section>
  );
}

export default Services;
