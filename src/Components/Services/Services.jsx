import React from "react";
import Service from "./Service";
import Title from "../Shared/Title/Title";

const serviceList = [
  {
    id: "01",
    heading: "Agente de Ligação com Inteligência Artificial",
    subHeading: "Agente de Ligação",
    para: "Eu, Kito Expert, te coloco no controle total das suas ligações! Você adiciona informações ou carrega um arquivo para o meu agente, carrega sua lista de clientes via planilhas online pelo Excel e aperta o play!",
  },
  {
    id: "02",
    heading: "Agente de WhatsApp com Inteligência Artificial",
    subHeading: "Agente de WhatsApp",
    para: "Eu, Kito Expert, configuro seu WhatsApp em segundos! Você só precisa logar em seu WhatsApp via QR Code, configurar meu agente adicionando informações diretamente na interface ou através de um arquivo, e pronto!",
  },
  {
    id: "03",
    heading: "Sistema de Agendamento com Kito Expert",
    subHeading: "Sistema de Agendamento",
    para: "Eu, Kito Expert, te dou o controle completo! Eu gerencio o cadastro dos profissionais da sua empresa, serviços, pacotes e clientes, deixando tudo disponível em uma interface com relatórios dinâmicos.",
  },
  {
    id: "04",
    heading: "Kito Dev - Agente Desenvolvedor de Sites e Dashboards",
    subHeading: "Desenvolvimento de Sites",
    para: "Eu sou Kito Dev, seu arquiteto digital! Minha especialidade é transformar suas ideias em sites e dashboards funcionais e visuais. Basta me enviar suas solicitações via texto ou voz, e eu as converterei em soluções web personalizadas.",
  },
];
const Services = ({ isHeading }) => {
  return (
    <section
      id="services"
      className={`service__section overhid ${isHeading && "pt-120"}  pb-120`}
    >
      <div className="container">
        {isHeading && (
          <Title
            mainTitle="Meus Serviços Especiais para o Desenvolvimento do Seu Negócio"
            sortTitle="Serviços que eu ofereço"
          />
        )}

        <div className={`service__uniquewrap `}>
          {serviceList.map(({ id, heading, subHeading, para }) => (
            <Service
              key={id}
              id={id}
              heading={heading}
              subHeading={subHeading}
              para={para}
            />
          ))}
        </div>
        <div className="text-center mt-5">
          
         
        </div>
      </div>
    </section>
  );
};

export default Services;

