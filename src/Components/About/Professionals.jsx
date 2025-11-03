import React from "react";

const professionalsList = [
  {
    id: 1,
    name: "Kito Expert",
    role: "Agente Comercial e Consultor de Soluções",
    description: "Eu sou Kito Expert, seu parceiro comercial e consultor principal. Como especialista em todos os produtos da agência, estou programado para resolver suas dúvidas e guiar você em cada passo, garantindo que encontre a solução perfeita para suas necessidades. Conte comigo para um atendimento completo e inteligente, focado em seus resultados.",
  },
  {
    id: 2,
    name: "Rob",
    role: "Agente de Suporte Avançado (IA Neural)",
    description: "Eu sou Rob, o cérebro por trás do seu suporte. Controle todos os tickets de e-mail e mensagens de WhatsApp, e garanto respostas rápidas e eficazes. Minha inteligência artificial é integrada a um vasto banco de dados e potencializada por uma linha neural que aprimora meu aprendizado constantemente, auxiliando nossos clientes 24 horas por dia, 7 dias por semana, com soluções precisas.",
  },
  {
    id: 3,
    name: "Carlos",
    role: "Agente Especialista em Configuração WhatsApp",
    description: "Eu sou Carlos, seu especialista em WhatsApp. Minha missão é simplificar a configuração dos seus agentes de WhatsApp. Com a minha ajuda, você terá seu atendimento automatizado e inteligente funcionando perfeitamente em questão de minutos, pronto para interagir com seus clientes de forma eficaz.",
  },
  {
    id: 4,
    name: "Matheus",
    role: "Agente Especialista em Configuração de Agentes de Voz",
    description: "Eu sou Matheus, o expert em transformar sua voz em resultados. Comigo, a configuração dos seus agentes de Voz será rápida e sem complicações. Eu garanto que seus agentes de IA estarão prontos para vender, cobrar ou se comunicar de forma impactante e autônoma, operando com a máxima eficiência.",
  },
  {
    id: 5,
    name: "Isa",
    role: "Agente Especialista em Sistema de Agendamento",
    description: "Eu sou Isa, sua referência em agendamentos. Domino cada detalhe do sistema e estou aqui para auxiliar na configuração e tirar todas as suas dúvidas. Com minha inteligência, você terá controle total sobre seus agendamentos, otimizando a gestão e garantindo que cada compromisso seja um sucesso, sem falhas.",
  },
];

const Professionals = ({ isTabActive }) => {
  return (
    <div className={`tabitem ${isTabActive === "professionals" ? "active" : ""}`}>
      <div className="about__v1wrap">
        <div className="row g-4">
          {professionalsList.map(({ id, name, role, description }) => (
            <div key={id} className="col-lg-6 col-md-6">
              <div className="professional__card">
                <h3>{name}</h3>
                <h4>{role}</h4>
                <p style={{ textAlign: 'justify' }}>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Professionals;