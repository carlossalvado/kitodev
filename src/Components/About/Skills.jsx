import React from "react";
import { Link } from "react-router-dom";
import personalInfothumb from "../../assets/img/about/ssss.png";
import figma from "../../assets/img/about/figma.png";
import word from "../../assets/img/about/word.png";
import html from "../../assets/img/about/html.png";
import boot from "../../assets/img/about/boot.png";

const skillsList = [
  ///////////// cards dos serviços ////////////////
];
const Skills = ({ isTabActive }) => {
  return (
    <div className={`tabitem ${isTabActive === "skills" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>Agente de Ligação com Inteligência Artificial</h2>
              <p style={{ textAlign: 'justify' }}>
                Eu, Kito Expert, te coloco no controle total das suas ligações! Você adiciona informações ou carrega um arquivo para o meu agente, carrega sua lista de clientes via planilhas online pelo Excel e aperta o play! É simples, rápido e contínuo. Tenha acesso ao conteúdo de cada chamada! <span style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>Integre o Agente de WhatsApp para otimizar seus resultados, para dar suporte a seus clientes e não perder a oportunidade de ter um vendedor disponível 24 horas por dia, 7 dias por semana.</span>
              </p>
              <div className="mt-30">
                <Link to="/service-details?service=ligacoes" className="cmn--btn">
                  <span>Saiba Mais Sobre Agente de Ligações</span>
                </Link>
              </div>
              <div className="about__contactwrap">
                <div className="row g-4">
                  {skillsList.map(({id, skill, image, percentage}) => {
                    return (
                      <div key={id} className="col-xxl-6 col-xl-6 col-lg-12 col-md-6">
                        <div className="abox myskill__item">
                          <div className="thumb">
                            <img src={image} alt="img" />
                          </div>
                          <div className="mys">
                            <span className="ptext fz-18 mb-15 d-block">{skill}</span>
                            <h1 className="fw-600">{percentage}</h1>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

