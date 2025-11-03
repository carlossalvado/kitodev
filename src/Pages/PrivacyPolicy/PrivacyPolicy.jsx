import React from "react";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import { ScrollRestoration } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <>
      <PageHeader
        heading={"Política de Privacidade e LGPD"}
        page={"Proteção e Transparência de Dados"}
      />
      <section className="service__details overhid pb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="ser__left__details">
                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    1. Introdução
                  </h3>
                  <p className="fz-16 pra ttext__one mb-4" style={{ textAlign: 'justify' }}>
                    Esta Política de Privacidade descreve como a Kito Expert coleta, usa, armazena e protege
                    suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD
                    - Lei nº 13.709/2018).
                  </p>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    2. Dados Coletados
                  </h3>
                  <p className="fz-16 pra mb-4" style={{ textAlign: 'justify' }}>
                    Coletamos as seguintes categorias de dados pessoais:
                  </p>
                  <div className="abox p-4 mb-4" style={{ background: 'rgba(201, 243, 29, 0.1)', border: '1px solid rgba(201, 243, 29, 0.3)' }}>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Dados de cadastro: nome, e-mail, telefone</li>
                      <li>Dados de uso: interações com a plataforma, logs de acesso</li>
                      <li>Dados de comunicação: conversas com agentes de IA, mensagens de WhatsApp</li>
                      <li>Dados técnicos: endereço IP, tipo de navegador, dispositivo</li>
                    </ul>
                  </div>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    3. Finalidade do Tratamento
                  </h3>
                  <p className="fz-16 pra mb-4" style={{ textAlign: 'justify' }}>
                    Seus dados são utilizados para:
                  </p>
                  <div className="abox p-4 mb-4" style={{ background: 'rgba(201, 243, 29, 0.1)', border: '1px solid rgba(201, 243, 29, 0.3)' }}>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Fornecer e melhorar nossos serviços de automação com IA</li>
                      <li>Processar transações e gerenciar sua conta</li>
                      <li>Enviar comunicações relacionadas ao serviço</li>
                      <li>Cumprir obrigações legais e regulatórias</li>
                      <li>Prevenir fraudes e garantir a segurança da plataforma</li>
                    </ul>
                  </div>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    4. Base Legal
                  </h3>
                  <p className="fz-16 pra mb-4" style={{ textAlign: 'justify' }}>
                    O tratamento dos seus dados pessoais é realizado com base no consentimento, execução
                    de contrato, cumprimento de obrigação legal e legítimo interesse, conforme previsto na
                    LGPD.
                  </p>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    5. Compartilhamento de Dados
                  </h3>
                  <p className="fz-16 pra mb-4" style={{ textAlign: 'justify' }}>
                    Não vendemos seus dados pessoais. Podemos compartilhar informações com prestadores de
                    serviços terceirizados que nos auxiliam na operação da plataforma, sempre mediante
                    contrato e com garantias de segurança adequadas.
                  </p>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    6. Armazenamento e Segurança
                  </h3>
                  <p className="fz-16 pra mb-4" style={{ textAlign: 'justify' }}>
                    Seus dados são armazenados em servidores seguros com criptografia e medidas técnicas e
                    organizacionais apropriadas para proteger contra acesso não autorizado, alteração,
                    divulgação ou destruição.
                  </p>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    7. Retenção de Dados
                  </h3>
                  <p className="fz-16 pra mb-4" style={{ textAlign: 'justify' }}>
                    Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades
                    descritas nesta política, a menos que um período de retenção maior seja exigido ou
                    permitido por lei.
                  </p>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    8. Seus Direitos (LGPD)
                  </h3>
                  <p className="fz-16 pra mb-4" style={{ textAlign: 'justify' }}>
                    De acordo com a LGPD, você tem direito a:
                  </p>
                  <div className="abox p-4 mb-4" style={{ background: 'rgba(40, 167, 69, 0.1)', border: '1px solid rgba(40, 167, 69, 0.3)' }}>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Confirmação da existência de tratamento</li>
                      <li>Acesso aos dados</li>
                      <li>Correção de dados incompletos, inexatos ou desatualizados</li>
                      <li>Anonimização, bloqueio ou eliminação de dados desnecessários</li>
                      <li>Portabilidade dos dados</li>
                      <li>Eliminação dos dados tratados com consentimento</li>
                      <li>Informação sobre compartilhamento de dados</li>
                      <li>Revogação do consentimento</li>
                    </ul>
                  </div>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    9. Uso de Cookies
                  </h3>
                  <p className="fz-16 pra mb-4" style={{ textAlign: 'justify' }}>
                    Utilizamos cookies e tecnologias similares para melhorar sua experiência. Consulte
                    nossa Política de Cookies para mais informações.
                  </p>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    10. Menores de Idade
                  </h3>
                  <p className="fz-16 pra mb-4" style={{ textAlign: 'justify' }}>
                    Nossos serviços não são direcionados a menores de 18 anos. Não coletamos
                    intencionalmente dados de menores sem o consentimento dos responsáveis legais.
                  </p>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    11. Alterações na Política
                  </h3>
                  <p className="fz-16 pra mb-4" style={{ textAlign: 'justify' }}>
                    Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre
                    mudanças significativas através da plataforma ou por e-mail.
                  </p>
                </div>

                <div className="text__box">
                  <h3 className="textt36 d-block mb-4">
                    12. Encarregado de Dados (DPO)
                  </h3>
                  <p className="fz-16 pra mb-4" style={{ textAlign: 'justify' }}>
                    Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de dados, entre em
                    contato com nosso Encarregado de Proteção de Dados através dos canais disponíveis na
                    plataforma.
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

export default PrivacyPolicy;