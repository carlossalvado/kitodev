import React from "react";
import {Envelope, GeoAlt} from "react-bootstrap-icons"
import mettingImag from "../../assets/img/project/project-need.png"
const Metting = () => {
  return (
    <section className="project__metting overhid pt-120 pb-120">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-7">
            <div className="pro__metting__content">
              <div className="project__head">
                <span
                  className="common__sub"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  Está pronto?
                </span>
                <h2
                  className="fw-500"
                  data-aos="fade-down"
                  data-aos-duration="1600"
                >
                  Caso você tenha chegado até aqui, não hesite!
                 
                
                </h2>
              </div>
              <div
                className="about__contbox__item pb-30"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                
                
              </div>
              
            </div>
          </div>
          <div className="col-lg-5">
            <div
              className="pro__mettingthumb"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <img src={mettingImag} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metting;
