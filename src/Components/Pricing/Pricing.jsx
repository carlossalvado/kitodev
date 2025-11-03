import React, { useState } from "react";
import basic from "../../assets/img/project/basic.png";
import warranty from "../../assets/img/project/warranty.png";
import premium from "../../assets/img/project/premium-quality.png";
import Price from "./Price";
import Title from "../Shared/Title/Title";

const servicesList = [
  { id: 1, name: "Agente de Whatsapp", monthlyPrice: 150, annualPrice: 900 },
  { id: 2, name: "Agente de Ligações", monthlyPrice: 0, annualPrice: 2500 },
  { id: 3, name: "Gestor de agendamentos", monthlyPrice: 100, annualPrice: 600 },
];
const planData = [
  {
    id: 1,
    planName: "Agente de Whatsapp",
    monthlyPrice: "R$150",
    annualPrice: "R$900",
    time: "Por Mês",
    annualTime: "Por Ano",
    fetcher: [
      " Api Oficial da Meta",
      " Integração com QR Code",
      " Agente de I.A.",
      " Funcionamento 24/7",
      " Controle de conversas",
    ],
    image: basic,
  },
  {
    id: 2,
    planName: "Agente de Ligações",
    annualPrice: "R$2500",
    annualTime: "Por Ano",
    fetcher: [
      " Controle de Ligações",
      " Pagamento pré pago",
      " Controle de conteúdo",
      " Integração com Planilhas",
      " Multiplos Agentes",
      " Sistema de recaga de minutos",
      " Credito inicial de 500 minutos"
    ],
    image: warranty,
  },
    {
    id: 3,
    planName: "Gestor de agendamentos",
    monthlyPrice: "R$100",
    annualPrice: "R$600",
    time: "Por Mês",
    annualTime: "Por Ano",
    fetcher: [
      " Sem instalação, controle Web",
      " Agenda compartilhada com profissinais",
      " Relátorios de agendamentos e faturamento",
      " Acesso por profissional",
      " Gestão de Clientes, serviços, pacotes e profissionais",
    ],
    image: premium,
  },
  {
    id: 4,
    planName: "Criador de Sites",
    monthlyPrice: "R$50",
    time: "Por Projeto",
    fetcher: [
      " Sem instalação, controle Web",
      " Adicione a api de sua preferência",
      " Guia de utilização de PROMPTS",
      " Exporte para o github, publique ou faça o que quiser",
      " Cadastro gratuito",

    ],
    image: premium,
  },
  {
    id: 5,
    planName: "Combo",
    monthlyPrice: "",
    annualPrice: "",
    time: "",
    annualTime: "",
    fetcher: [],
    image: premium,
  },
];
const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [comboPeriod, setComboPeriod] = useState(false); // false = mensal, true = anual

  const calculateComboPrice = () => {
    if (selectedServices.length === 0) return "";

    const selectedNames = selectedServices.map(s => s.name).sort();

    // Combinações especiais de preços
    if (comboPeriod) { // Anual
      if (selectedNames.includes("Agente de Whatsapp") &&
          selectedNames.includes("Agente de Ligações") &&
          selectedNames.includes("Gestor de agendamentos")) {
        return "R$3500";
      } else if (selectedNames.includes("Agente de Ligações") &&
                 selectedNames.includes("Agente de Whatsapp")) {
        return "R$3000,";
      } else if (selectedNames.includes("Agente de Whatsapp") &&
                 selectedNames.includes("Gestor de agendamentos")) {
        return "R$1200";
      } else if (selectedNames.includes("Agente de Ligações") &&
                 selectedNames.includes("Gestor de agendamentos")) {
        return "R$2800";
      }
    } else { // Mensal
      if (selectedNames.includes("Agente de Whatsapp") &&
          selectedNames.includes("Agente de Ligações") &&
          selectedNames.includes("Gestor de agendamentos")) {
        return "R$450,00";
      } else if (selectedNames.includes("Agente de Ligações") &&
                 selectedNames.includes("Agente de Whatsapp")) {
        return "R$350,00";
      } else if (selectedNames.includes("Agente de Whatsapp") &&
                 selectedNames.includes("Gestor de agendamentos")) {
        return "R$200,00";
      } else if (selectedNames.includes("Agente de Ligações") &&
                 selectedNames.includes("Gestor de agendamentos")) {
        return "R$300,00";
      }
    }

    // Cálculo padrão se não for combinação especial
    let total = selectedServices.reduce((sum, service) => {
      return sum + (comboPeriod ? service.annualPrice : service.monthlyPrice);
    }, 0);

    // Aplicar desconto de 10% para combos anuais
    if (comboPeriod && selectedServices.length >= 2) {
      total = total * 0.9;
    }

    return `R$${total.toFixed(2).replace('.', ',')}`;
  };

  const calculateComboTime = () => {
    return comboPeriod ? "Por Ano" : "Por Mês";
  };

  return (
    <section className="pricing__section pt-0 pb-120">
      <div className="container">
        <div className="project__head text-center mb-5">
          <h2 className="pricing__title" data-aos="fade-up" data-aos-duration="1200">
        O plano ideal para impulsionar seu negócio
          </h2>
        </div>
        <div className="pricing__toggle text-center mb-5">
          <div className="toggle__  wrapper d-inline-flex align-items-center bg-dark p-2 rounded-pill">
            <button
              className={`toggle__option btn ${!isAnnual ? 'active' : ''}`}
              style={{
                backgroundColor: !isAnnual ? '#c9f31d' : 'transparent',
                color: !isAnnual ? 'black' : '#c9f31d',
                border: '1px solid #c9f31d',
                borderRadius: '20px 0 0 20px'
              }}
              onClick={() => setIsAnnual(false)}
            >
              Mensal
            </button>
            <button
              className={`toggle__option btn ${isAnnual ? 'active' : ''}`}
              style={{
                backgroundColor: isAnnual ? '#c9f31d' : 'transparent',
                color: isAnnual ? 'black' : '#c9f31d',
                border: '1px solid #c9f31d',
                borderRadius: '0 20px 20px 0'
              }}
              onClick={() => setIsAnnual(true)}
            >
              Anual
              <span className="badge bg-success ms-2">-50%</span>
            </button>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {planData.map(({ id, image, planName, fetcher, monthlyPrice, annualPrice, time, annualTime }) => (
            <Price
              key={id}
              image={image}
              planName={planName}
              price={planName === "Combo" ? calculateComboPrice() : (planName === "Criador de Sites" ? monthlyPrice : (isAnnual ? annualPrice : monthlyPrice))}
              time={planName === "Combo" ? calculateComboTime() : (planName === "Criador de Sites" ? time : (isAnnual ? annualTime : time))}
              fetcher={planName === "Combo" ? selectedServices.map(service => service.name) : fetcher}
              id={id}
              isAnnual={isAnnual}
              isCombo={planName === "Combo"}
              servicesList={servicesList}
              selectedServices={selectedServices}
              setSelectedServices={setSelectedServices}
              comboPeriod={comboPeriod}
              setComboPeriod={setComboPeriod}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

