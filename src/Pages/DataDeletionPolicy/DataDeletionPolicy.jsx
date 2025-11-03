import React from "react";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import { ScrollRestoration } from "react-router-dom";

const DataDeletionPolicy = () => {
  return (
    <>
      <PageHeader
        heading={"Política de Exclusão de Dados"}
        page={"Direitos do Usuário e Exclusão de Dados"}
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
                    Esta Política de Exclusão de Dados descreve como a Kito Expert processa solicitações
                    de exclusão de dados pessoais dos usuários, em conformidade com a Lei Geral de Proteção
                    de Dados (LGPD - Lei nº 13.709/2018) e outras leis aplicáveis de proteção de dados.
                  </p>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    2. Direito à Exclusão de Dados
                  </h3>
                  <p className="fz-16 pra mb-4" style={{ textAlign: 'justify' }}>
                    De acordo com a LGPD, você tem o direito de solicitar a exclusão dos seus dados pessoais
                    nas seguintes situações:
                  </p>
                  <div className="abox p-4 mb-4" style={{ background: 'rgba(201, 243, 29, 0.1)', border: '1px solid rgba(201, 243, 29, 0.3)' }}>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Quando os dados deixarem de ser necessários para a finalidade para a qual foram coletados</li>
                      <li>Quando houver revogação do consentimento, nos casos aplicáveis</li>
                      <li>Quando houver oposição ao tratamento, nos casos de tratamento não baseado em consentimento</li>
                      <li>Quando os dados forem tratados de forma ilícita</li>
                      <li>Quando houver obrigação legal de exclusão</li>
                      <li>Quando os dados forem coletados com base no consentimento de criança, sem verificação adequada</li>
                    </ul>
                  </div>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    3. Como Solicitar a Exclusão de Dados
                  </h3>
                  <p className="fz-16 pra mb-4" style={{ textAlign: 'justify' }}>
                    Para solicitar a exclusão dos seus dados pessoais, siga os seguintes passos:
                  </p>
                  <div className="abox p-4 mb-4" style={{ background: 'rgba(40, 167, 69, 0.1)', border: '1px solid rgba(40, 167, 69, 0.3)' }}>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Acesse sua conta na plataforma Kito Expert</li>
                      <li>Vá para as configurações de privacidade</li>
                      <li>Clique em "Solicitar Exclusão de Dados"</li>
                      <li>Confirme sua identidade através do e-mail ou telefone cadastrado</li>
                      <li>Aguarde o processamento da solicitação (até 30 dias)</li>
                    </ul>
                  </div>
                  <p className="fz-16 pra mb-4" style={{ textAlign: 'justify' }}>
                    Alternativamente, você pode entrar em contato conosco através dos canais de suporte
                    indicados no final desta página.
                  </p>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    4. Processo de Exclusão
                  </h3>
                  <p className="fz-16 pra mb-4" style={{ textAlign: 'justify' }}>
                    Após receber sua solicitação de exclusão, seguiremos o seguinte processo:
                  </p>
                  <div className="abox p-4 mb-4" style={{ background: 'rgba(255, 193, 7, 0.1)', border: '1px solid rgba(255, 193, 7, 0.3)' }}>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Verificação da sua identidade para confirmar a legitimidade da solicitação</li>
                      <li>Avaliação se há impedimentos legais para a exclusão (como obrigações fiscais ou legais)</li>
                      <li>Anonimização ou exclusão definitiva dos dados pessoais</li>
                      <li>Notificação do resultado da solicitação</li>
                      <li>Exclusão de backups e cópias, quando tecnicamente viável</li>
                    </ul>
                  </div>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    5. Limitações à Exclusão
                  </h3>
                  <p className="fz-16 pra mb-4" style={{ textAlign: 'justify' }}>
                    Em alguns casos, não poderemos excluir todos os seus dados imediatamente devido a:
                  </p>
                  <div className="abox p-4 mb-4" style={{ background: 'rgba(220, 53, 69, 0.1)', border: '1px solid rgba(220, 53, 69, 0.3)' }}>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Obrigações legais de retenção (como dados fiscais por 5 anos)</li>
                      <li>Processos judiciais em andamento</li>
                      <li>Exercício regular de direitos em processo judicial, administrativo ou arbitral</li>
                      <li>Investigações de segurança ou proteção contra fraudes</li>
                      <li>Dados anonimizados que não permitem identificação</li>
                    </ul>
                  </div>
                  <p className="fz-16 pra mb-4" style={{ textAlign: 'justify' }}>
                    Nestes casos, os dados serão bloqueados e não serão utilizados para outras finalidades
                    além das necessárias para cumprir as obrigações legais.
                  </p>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    6. Dados que Podem Ser Excluídos
                  </h3>
                  <p className="fz-16 pra mb-4" style={{ textAlign: 'justify' }}>
                    Geralmente, podemos excluir os seguintes tipos de dados pessoais:
                  </p>
                  <div className="abox p-4 mb-4" style={{ background: 'rgba(201, 243, 29, 0.1)', border: '1px solid rgba(201, 243, 29, 0.3)' }}>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Dados de cadastro (nome, e-mail, telefone)</li>
                      <li>Histórico de interações com agentes de IA</li>
                      <li>Dados de navegação e uso da plataforma</li>
                      <li>Conversas e mensagens armazenadas</li>
                      <li>Preferências pessoais e configurações</li>
                    </ul>
                  </div>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    7. Prazo para Resposta
                  </h3>
                  <p className="fz-16 pra mb-4" style={{ textAlign: 'justify' }}>
                    Processaremos sua solicitação de exclusão no prazo máximo de 30 dias a partir do
                    recebimento, conforme determinado pela LGPD. Em casos complexos, este prazo pode
                    ser prorrogado por mais 30 dias, mediante justificativa.
                  </p>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    8. Consequências da Exclusão
                  </h3>
                  <p className="fz-16 pra mb-4" style={{ textAlign: 'justify' }}>
                    Após a exclusão dos seus dados:
                  </p>
                  <div className="abox p-4 mb-4" style={{ background: 'rgba(255, 193, 7, 0.1)', border: '1px solid rgba(255, 193, 7, 0.3)' }}>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Você não poderá mais acessar sua conta</li>
                      <li>Histórico de serviços poderá ser perdido</li>
                      <li>Algumas funcionalidades podem deixar de estar disponíveis</li>
                      <li>Dados necessários para cumprimento de contratos podem ser mantidos anonimizados</li>
                    </ul>
                  </div>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    9. Contato para Solicitações
                  </h3>
                  <p className="fz-16 pra mb-4" style={{ textAlign: 'justify' }}>
                    Para solicitar a exclusão dos seus dados ou esclarecer dúvidas sobre este processo,
                    entre em contato conosco através dos seguintes canais:
                  </p>
                  <div className="abox p-4 mb-4" style={{ background: 'rgba(40, 167, 69, 0.1)', border: '1px solid rgba(40, 167, 69, 0.3)' }}>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>E-mail: privacy@kitoexpert.com</li>
                      <li>Formulário de contato no site</li>
                      <li>Chat de suporte na plataforma</li>
                      <li>Telefone: +55 (11) 99999-9999</li>
                    </ul>
                  </div>
                </div>

                <div className="text__box">
                  <h3 className="textt36 d-block mb-4">
                    10. Atualizações desta Política
                  </h3>
                  <p className="fz-16 pra mb-4" style={{ textAlign: 'justify' }}>
                    Podemos atualizar esta Política de Exclusão de Dados periodicamente para refletir
                    mudanças em nossas práticas ou na legislação aplicável. Notificaremos sobre mudanças
                    significativas através da plataforma ou por e-mail.
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

export default DataDeletionPolicy;