import React from "react";
import Title from "../Shared/Title/Title";
import WorkProcessCard from "./WorkProcessCard";

const processList = [
  {
    id: 1,
    title: "Estratégia Inteligente & Automação",
    info: "Dê vida às suas ideias! Nossas ferramentas de IA são projetadas para você configurar de forma simples e intuitiva. Adicione suas informações, carregue seus dados e personalize cada detalhe, sem burocracia.",
    list: [
      "Interface amigável para inserir dados e scripts dos seus agentes.",
      "Flexibilidade para carregar listas de clientes e conteúdos personalizados.",
      "Total autonomia para ajustar e refinar as automações a qualquer momento.",
    ],
  },
  {
    id: 2,
    title: "Resultados Reais, Relatórios Precisos",
    info: "Veja seu negócio crescer! Nossas ferramentas entregam resultados concretos e relatórios detalhados, permitindo que você acompanhe o desempenho e tome decisões estratégicas com base em dados.",
    list: [
      "Relatórios completos de ligações, interações via WhatsApp e agendamentos.",
      "Análise de comissões geradas, faturamento e desempenho de cada profissional.",
      "Insights claros para otimizar suas estratégias de marketing e vendas continuamente.",
    ],
  },
  {
    id: 3,
    title: "Gestão, Resultados e Evolução Contínua",
    info: "Nossos Agentes de IA trabalham 24/7 para você, garantindo que suas operações sejam eficientes e que seus resultados sejam sempre monitorados e aprimorados.",
    list: [
      "Monitoramento constante de performance dos Agentes de Comunicação.",
      "Relatórios dinâmicos e detalhados de agendamentos, comissões e faturamento.",
      "Otimização contínua de processos e estratégias com base nos dados gerados pela IA.",
    ],
  },
];
const WorkeProcess = () => {
  return (
    <section className="process__section pt-120 pb-120">
      <div className="container">
        <Title
          mainTitle="Conceito Inteligente"
          sortTitle="Automação com Inteligência Artificial"
        />
        <div className="row g-4">
          {processList.map(({ id, info, list, title }) => (
            <WorkProcessCard key={id} info={info} list={list} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkeProcess;
