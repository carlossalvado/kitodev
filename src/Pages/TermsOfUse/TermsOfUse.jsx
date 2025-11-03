import React from "react";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import { ScrollRestoration } from "react-router-dom";

const TermsOfUse = () => {
  return (
    <>
      <PageHeader
        heading={"Termos de Uso"}
        page={"Condições Gerais de Uso"}
      />
      <section className="service__details overhid pb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="ser__left__details">
                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    1. Aceitação dos Termos
                  </h3>
                  <p className="fz-16 pra ttext__one mb-4" style={{ textAlign: 'justify' }}>
                    Ao acessar e usar a plataforma Kito Expert, você concorda em cumprir e estar vinculado
                    aos seguintes termos e condições de uso. Se você não concordar com alguma parte destes
                    termos, não poderá acessar o serviço.
                  </p>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    2. Descrição do Serviço
                  </h3>
                  <p className="fz-16 pra ttext__one mb-4" style={{ textAlign: 'justify' }}>
                    A Kito Expert oferece uma plataforma de automação com inteligência artificial, incluindo
                    agentes de WhatsApp, sistema de ligações, agendamento e geração de dashboards. Os
                    serviços são fornecidos "como estão" e podem ser modificados ou descontinuados a
                    qualquer momento.
                  </p>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    3. Cadastro e Conta
                  </h3>
                  <p className="fz-16 pra ttext__one mb-4" style={{ textAlign: 'justify' }}>
                    Você é responsável por manter a confidencialidade de suas credenciais de acesso e por
                    todas as atividades que ocorram em sua conta. Você concorda em notificar-nos
                    imediatamente sobre qualquer uso não autorizado de sua conta.
                  </p>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    4. Uso Aceitável
                  </h3>
                  <p className="fz-16 pra ttext__one mb-4" style={{ textAlign: 'justify' }}>
                    Você concorda em não usar a plataforma para qualquer propósito ilegal ou proibido por
                    estes termos. Isso inclui, mas não se limita a, atividades fraudulentas, disseminação
                    de malware, ou violação de direitos de propriedade intelectual.
                  </p>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    5. Propriedade Intelectual
                  </h3>
                  <p className="fz-16 pra ttext__one mb-4" style={{ textAlign: 'justify' }}>
                    Todo o conteúdo presente na plataforma, incluindo textos, gráficos, logos, ícones e
                    software, é propriedade da Kito Expert e está protegido por leis de direitos autorais
                    internacionais.
                  </p>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    6. Limitação de Responsabilidade
                  </h3>
                  <p className="fz-16 pra ttext__one mb-4" style={{ textAlign: 'justify' }}>
                    A Kito Expert não será responsável por quaisquer danos diretos, indiretos, incidentais,
                    especiais ou consequenciais resultantes do uso ou incapacidade de usar nossos serviços.
                  </p>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    7. Modificações dos Termos
                  </h3>
                  <p className="fz-16 pra ttext__one mb-4" style={{ textAlign: 'justify' }}>
                    Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações
                    entrarão em vigor imediatamente após a publicação na plataforma. O uso continuado do
                    serviço após tais modificações constitui sua aceitação dos novos termos.
                  </p>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    8. Lei Aplicável
                  </h3>
                  <p className="fz-16 pra ttext__one mb-4" style={{ textAlign: 'justify' }}>
                    Estes termos serão regidos e interpretados de acordo com as leis do Brasil. Qualquer
                    disputa relacionada a estes termos será submetida à jurisdição exclusiva dos tribunais
                    brasileiros.
                  </p>
                </div>

                <div className="text__box">
                  <h3 className="textt36 d-block mb-4">
                    9. Contato
                  </h3>
                  <p className="fz-16 pra ttext__one mb-4" style={{ textAlign: 'justify' }}>
                    Para questões sobre estes Termos de Uso, entre em contato através dos nossos canais de
                    atendimento automatizados disponíveis na plataforma.
                  </p>
                  <p className="fz-14 mt-3" style={{ color: 'var(--pra)' }}>
                    <em>Última atualização: Janeiro de 2025</em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollRestoration />
    </>
  );
};

export default TermsOfUse;