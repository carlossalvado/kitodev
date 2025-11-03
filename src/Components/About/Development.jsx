import React from "react";
import { Link } from "react-router-dom";
import personalInfothumb from "../../assets/img/about/hhhh.png"

const Development = ({isTabActive}) => {
  return (
    <div className={`tabitem ${isTabActive === "development" ? "active":""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>Kito Dev - Agente Desenvolvedor de Sites e Dashboards</h2>
              <p style={{ textAlign: 'justify' }}>
                Eu sou Kito Dev, seu arquiteto digital! Minha especialidade é transformar suas ideias em sites e dashboards funcionais e visuais. Basta me enviar suas solicitações via texto ou voz, e eu as converterei em soluções web personalizadas, otimizando seu marketing e processos com a agência. Eu construo o seu mundo digital.
              </p>
              <div className="mt-30">
                <Link to="/service-details?service=04" className="cmn--btn">
                  <span>Saiba Mais Sobre Desenvolvimento Web</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Development;