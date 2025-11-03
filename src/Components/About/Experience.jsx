import React from "react";
import { Link } from "react-router-dom";
import personalInfothumb from "../../assets/img/about/pppp.png"

const Experience = ({isTabActive}) => {
  return (
    <div className={`tabitem ${isTabActive === "experience" ? "active":""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>Agente de WhatsApp com Inteligência Artificial</h2>
              <p style={{ textAlign: 'justify' }}>
                Eu, Kito Expert, configuro seu WhatsApp em segundos! Você só precisa logar em seu WhatsApp via QR Code, configurar meu agente adicionando informações diretamente na interface ou através de um arquivo, e pronto! Seu agente está configurado para atender seus clientes com inteligência e autonomia, sem falhas.
              </p>
              <div className="mt-30">
                <Link to="/service-details?service=whatsapp" className="cmn--btn">
                  <span>Saiba Mais Sobre WhatsApp Business</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
