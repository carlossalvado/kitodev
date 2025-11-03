import React from "react";
import { PlayFill, ArrowRight } from "react-bootstrap-icons";
import { useParams, useSearchParams, Link } from "react-router-dom";
import PageHeader from "../Components/Shared/PageHeader/PageHeader";
import Accordion from "../Components/Accordion/Accordion";
import Chat from "../Components/Chat/Chat";

import serDv1 from "../assets/img/project/ser-dv1.png";
import serDv2 from "../assets/img/project/ser-dv2.png";
import img9999 from "../assets/img/about/9999.png";
import detialcontact from "../assets/img/contact/ser-detialcontact.png";
import { ScrollRestoration } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service');

  const servicesData = {
    "01": {
      title: "Agente de Ligação com Inteligência Artificial",
      description: `☎️ Agente de Ligações Telefônicas com IA\n\nUm agente de voz com fala humana e natural, capaz de realizar ligações automáticas com base em listas personalizadas de contatos.\n\nPrincipais recursos:\n- Sistema de créditos por ligação.\n- Importação de listas de clientes via Google Planilhas.\n- Definição de prompts e instruções de atendimento.\n- Registros detalhados de chamadas, gravações e relatórios no painel.\n- Integração opcional com o Sistema de Agendamentos para confirmar, reagendar e registrar compromissos via telefone.\n\nIdeal para: empresas que fazem vendas ativas, confirmações de agenda, cobranças ou pesquisas.`,
      specialization: "Especialização em ligações outbound e inbound.",
      videos: ["https://www.youtube.com/watch?v=zFuJgOiUEso"],
      images: [serDv1, serDv2],
      accordion: [
        {
          id: "acc1",
          heading: "Como configurar o agente de ligação?",
          para: "Basta fornecer a lista de contatos via Excel, definir o script de ligação e o agente fará o resto automaticamente.",
        },
        {
          id: "acc2",
          heading: "Quais tipos de ligações ele realiza?",
          para: "Ligações de vendas, cobrança, confirmação de agendamentos e follow-ups personalizados.",
        },

      ],
    },
    "02": {
      title: "Agente de WhatsApp com Inteligência Artificial",
      description: `📱 Agente de WhatsApp com IA\n\nUm agente conversacional conectado à API oficial da Meta, que atua diretamente no WhatsApp Business da empresa, respondendo mensagens e interagindo com clientes de forma natural.\n\nPrincipais recursos:\n- Login direto via QR Code na plataforma web.\n- Personalização total do comportamento do agente por meio de prompts e documentos de contexto (PDF, planilhas, textos).\n- Comunicação natural, 24h por dia, automatizando atendimento, suporte e vendas.\n- Pode ser integrado com o Sistema de Agendamentos para que o agente crie, edite ou exclua agendamentos diretamente nas conversas.\n\nIdeal para: Empresas que desejam atendimento inteligente e contínuo no WhatsApp.`,
      specialization: "Atendimento automatizado no WhatsApp, com respostas inteligentes e integração a sistemas de agendamento.",
      accordion: [
        {
          id: "acc1",
          heading: "Como conectar o WhatsApp?",
          para: "Use o QR Code fornecido para logar e configurar o agente em minutos.",
        },
        {
          id: "acc2",
          heading: "Ele responde automaticamente?",
          para: "Sim, com inteligência artificial que aprende com cada interação para melhorar as respostas.",
        },
      ],
    },
    "03": {
      title: "Sistema de Agendamento com Kito Expert",
      description: `📅 Sistema de Agendamentos Profissional\n\nUma plataforma completa de gestão de horários, serviços, pacotes e profissionais, desenvolvida para simplificar a rotina operacional de empresas de serviços.\n\nPrincipais recursos:\n- Cadastro de serviços, pacotes e profissionais com controle de agenda e disponibilidade.\n- Painel administrativo com permissões de acesso.\n- Profissionais com painel individual, relatórios e controle de comissões.\n- Integração com agentes de IA (WhatsApp e Ligações) para automação total de agendamentos. (Opcional) \n\nIdeal para: clínicas, salões, academias, consultorias, escritórios e prestadores de serviço.`,
      specialization: "Gestão completa de agendamentos, com relatórios financeiros e integração ao WhatsApp.",
      accordion: [
        {
          id: "acc1",
          heading: "Como acessar os relatórios?",
          para: "Através da interface web, com dashboards dinâmicos e filtros personalizados.",
        },
        {
          id: "acc2",
          heading: "Integra com WhatsApp?",
          para: "Sim, automatiza agendamentos via conversas inteligentes no WhatsApp.",
        },
      ],
    },
    "04": {
      title: "Kito Dev - Agente Desenvolvedor de Sites e Dashboards",
      description: "Eu sou Kito Dev, seu arquiteto digital! Minha especialidade é transformar suas ideias em sites e dashboards funcionais e visuais. Basta me enviar suas solicitações via texto ou voz, e eu as convertirei em soluções web personalizadas, otimizando seu marketing e processos com a agência. Eu construo o seu mundo digital.",
      specialization: "Desenvolvimento de sites e dashboards personalizados, com foco em marketing e automação.",
      accordion: [
        {
          id: "acc1",
          heading: "Como solicitar um site?",
          para: "Envie suas ideias via texto ou voz, e eu desenvolverei conforme suas necessidades.",
        },
        {
          id: "acc2",
          heading: "Inclui dashboards?",
          para: "Sim, com visualizações de dados para otimizar seus processos de negócio.",
        },
      ],
    },
    "05": {
      title: "Combinações Inteligentes (Combos Kito Expert)",
      description: `🔗 Combinações Inteligentes (Combos Kito Expert)\nA Kito Expert permite que o cliente combine livremente os serviços para criar automações personalizadas conforme sua necessidade:\n\n- 💬 WhatsApp + Agendamentos\nO agente conversa com seus clientes, cria, altera e confirma horários automaticamente via WhatsApp.\n\n- ☎️ Ligações + Agendamentos\nO agente de voz liga para confirmar ou reagendar compromissos, atualizando tudo no sistema automaticamente.\n\n- 💬📞 WhatsApp + Ligações\nAtendimento completo — mensagens e voz — para comunicação 100% automatizada com seus clientes.\n\n- ⚙️ WhatsApp + Ligações + Agendamentos\nA integração máxima:\n  • O agente de WhatsApp atende e agenda.\n  • O agente de Ligações confirma e atualiza compromissos.\n  • O Sistema de Agendamentos centraliza tudo.\n\nJuntos, 
       eles criam uma experiência completa de automação comercial, onde o cliente é atendido, confirmado e gerenciado do início ao fim sem intervenção humana.`,
      specialization: "Integração completa de múltiplos agentes de IA para automação total.",
      accordion: [
        {
          id: "acc1",
          heading: "Como funciona a integração?",
          para: "Cada agente trabalha em conjunto, compartilhando dados e ações para uma experiência fluida.",
        },
        {
          id: "acc2",
          heading: "Posso escolher apenas alguns serviços?",
          para: "Sim, você pode combinar livremente os serviços conforme sua necessidade.",
        },
      ],
    },
    // Mapeamento dos parâmetros de query para os IDs dos serviços
    "agencia": "01",
    "whatsapp": "02",
    "agendamento": "03",
    "ligacoes": "01",
    "desenvolvimento": "04",
  };

  // Determina qual serviço mostrar baseado no parâmetro da URL ou query
  const serviceKey = serviceParam ? servicesData[serviceParam] : serviceId;
  const currentService = servicesData[serviceKey] || servicesData["01"];

  const accordionList = currentService.accordion;

  return (
    <>
 
      <PageHeader heading={currentService.title} page={currentService.title} />
      <section className="service__details overhid pb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="ser__left__details">
                <div className="thumb">
                  
                </div>
                <div
                  className="text__box mb__cus60"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  <h3 className="textt36 d-block">
                    Sobre {currentService.title}
                  </h3>
                  <div className="fz-16 pra ttext__one" style={{ textAlign: 'justify' }}>
                    {currentService.description.split('\n').map((line, index) => (
                      <p key={index} style={{ marginBottom: line.trim() === '' ? '1rem' : '0.5rem' }}>
                        {line.startsWith('• ') || line.startsWith('- ') ? (
                          <span style={{ display: 'block', marginLeft: '1rem' }}>
                            {line}
                          </span>
                        ) : line.trim() === '' ? (
                          <br />
                        ) : (
                          line
                        )}
                      </p>
                    ))}
                  </div>
                </div>
                <div
                  className="text__box mb__cus60"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  <h3 className="textt36 d-block">
                    Especialização e Processo de Trabalho
                  </h3>
                  <p className="fz-16 pra" style={{ textAlign: 'justify' }}>
                    {currentService.specialization}
                  </p>
                </div>
                <div className="paythumb position-relative">
                  <img src={img9999} alt="img" />
                  <a
                    href="https://www.youtube.com/watch?v=zFuJgOiUEso&amp;ab_channel=SujithRajendran"
                    className="video__80 video-btn"
                  >
                    <i>
                      <PlayFill />
                    </i>
                  </a>
                </div>
                <div className="ser__components">
                  <h2 className="whites mb-5">Tem alguma dúvida? Estamos à disposição.
</h2>
                  <div className="accordion" id="accordionExample">
                    {accordionList.map(({ id, heading, para }) => (
                      <Accordion key={id} id={id} heading={heading} para={para} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service__right__wrap">
                <div className="service__rightbox mb-30">
                  <h3>Agentes disponiveis</h3>
                  <a href="/service-details/01" className={`link__box mb-15 ${serviceId === "01" ? "active" : ""}`}>
                    Agente de Ligação com Inteligência Artificial
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <a href="/service-details/02" className={`link__box mb-15 ${serviceId === "02" ? "active" : ""}`}>
                    Agente de WhatsApp com Inteligência Artificial
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <a href="/service-details/03" className={`link__box mb-15 ${serviceId === "03" ? "active" : ""}`}>
                    Sistema de Agendamento com Kito Expert
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <a href="/service-details/04" className={`link__box mb-15 ${serviceId === "04" ? "active" : ""}`}>
                    Kito Dev - Agente Desenvolvedor de Sites e Dashboards
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <a href="/service-details/05" className={`link__box ${serviceId === "05" ? "active" : ""}`}>
                    Combinações Inteligentes (Combos Kito Expert)
                    <i className="bi bi-chevron-right"></i>
                  </a>
                </div>
                <Chat />
                <div className="mt-4">
                  <Link to={"/all-services"} className="cmn--btn d-flex align-items-center justify-content-center gap-2 w-100">
                    <span>VER PLANOS</span>
                    <span>
                      <i className="bi bi-arrow-right fz-20"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollRestoration/>
    </>
  );
};

export default ServiceDetails;