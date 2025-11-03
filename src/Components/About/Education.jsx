import React from "react";
import { Link } from "react-router-dom";
import personalInfothumb from "../../assets/img/about/llll.png"

const Education = ({isTabActive}) => {
  return (
    <div className={`tabitem ${isTabActive === "education" ? "active":""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>Sistema de Agendamento com Kito Expert</h2>
              <p style={{ textAlign: 'justify' }}>
Tenha controle total sobre seus agendamentos! Nossa plataforma oferece um sistema completo de gestão com acesso para administradores e profissionais. Gerencie calendários, agendamentos, visualize o histórico de clientes e acompanhe relatórios detalhados de comissões geradas para cada profissional e para a administração. Simplifique sua operação e maximize a rentabilidade do seu negócio. <br />
<strong style={{ fontSize: '18px', color: 'white' }}>Combine com nosso agente de WhatsApp e maximize seus resultados!</strong>          </p>
              <div className="mt-30">
                <Link to="/service-details?service=agendamento" className="cmn--btn">
                  <span>Saiba Mais Sobre Sistema de Agendamento</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

