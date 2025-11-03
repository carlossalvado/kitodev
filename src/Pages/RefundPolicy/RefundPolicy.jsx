import React from "react";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import { ScrollRestoration } from "react-router-dom";

const RefundPolicy = () => {
  return (
    <>
      <PageHeader
        heading={"Política de Reembolso"}
        page={"Condições de Devolução e Reembolso"}
      />
      <section className="service__details overhid pb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="ser__left__details">
                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    1. Garantia de Satisfação
                  </h3>
                  <p className="fz-16 pra ttext__one mb-4" style={{ textAlign: 'justify' }}>
                    Na Kito Expert, nos esforçamos para fornecer serviços de alta qualidade. Se você não
                    estiver satisfeito com nossos serviços, oferecemos uma política de reembolso clara e
                    justa.
                  </p>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    2. Período de Reembolso
                  </h3>
                  <p className="fz-16 pra ttext__one mb-4" style={{ textAlign: 'justify' }}>
                    Você tem até 7 (sete) dias corridos a partir da data de compra para solicitar um
                    reembolso, conforme estabelecido pelo Código de Defesa do Consumidor brasileiro (Lei
                    8.078/90, Artigo 49).
                  </p>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    3. Condições para Reembolso
                  </h3>
                  <p className="fz-16 pra mb-4" style={{ textAlign: 'justify' }}>
                    Para ser elegível a um reembolso, as seguintes condições devem ser atendidas:
                  </p>
                  <div className="abox p-4 mb-4" style={{ background: 'rgba(201, 243, 29, 0.1)', border: '1px solid rgba(201, 243, 29, 0.3)' }}>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>A solicitação deve ser feita dentro do período de 7 dias</li>
                      <li>Você não deve ter violado nossos Termos de Uso</li>
                      <li>O uso dos serviços deve estar dentro dos limites aceitáveis</li>
                      <li>Não deve haver evidências de abuso ou fraude</li>
                    </ul>
                  </div>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    4. Como Solicitar Reembolso
                  </h3>
                  <p className="fz-16 pra mb-4" style={{ textAlign: 'justify' }}>
                    Para solicitar um reembolso:
                  </p>
                  <div className="abox p-4 mb-4" style={{ background: 'rgba(201, 243, 29, 0.1)', border: '1px solid rgba(201, 243, 29, 0.3)' }}>
                    <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                      <li>Entre em contato através dos nossos canais de atendimento</li>
                      <li>Forneça seu número de pedido e email de cadastro</li>
                      <li>Explique brevemente o motivo da solicitação (opcional)</li>
                      <li>Aguarde a confirmação do processamento</li>
                    </ol>
                  </div>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    5. Processamento do Reembolso
                  </h3>
                  <p className="fz-16 pra ttext__one mb-4" style={{ textAlign: 'justify' }}>
                    Uma vez aprovada sua solicitação, o reembolso será processado e um crédito será
                    automaticamente aplicado ao seu método de pagamento original dentro de 5 a 10 dias
                    úteis, dependendo da instituição financeira.
                  </p>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    6. Reembolsos Parciais
                  </h3>
                  <p className="fz-16 pra ttext__one mb-4" style={{ textAlign: 'justify' }}>
                    Em algumas situações, apenas reembolsos parciais podem ser concedidos:
                  </p>
                  <div className="abox p-4 mb-4" style={{ background: 'rgba(201, 243, 29, 0.1)', border: '1px solid rgba(201, 243, 29, 0.3)' }}>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Uso significativo dos serviços antes da solicitação</li>
                      <li>Créditos ou benefícios já utilizados</li>
                      <li>Violações menores dos Termos de Uso</li>
                    </ul>
                  </div>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    7. Reembolsos Negados
                  </h3>
                  <p className="fz-16 pra mb-4" style={{ textAlign: 'justify' }}>
                    Reembolsos serão negados nas seguintes situações:
                  </p>
                  <div className="abox p-4 mb-4" style={{ background: 'rgba(220, 53, 69, 0.1)', border: '1px solid rgba(220, 53, 69, 0.3)' }}>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Solicitação após o período de 7 dias</li>
                      <li>Violação grave dos Termos de Uso</li>
                      <li>Uso fraudulento ou abusivo dos serviços</li>
                      <li>Cancelamento de assinatura sem motivo justificável após uso extensivo</li>
                    </ul>
                  </div>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    8. Assinaturas e Renovações
                  </h3>
                  <p className="fz-16 pra ttext__one mb-4" style={{ textAlign: 'justify' }}>
                    Para assinaturas recorrentes, você pode cancelar a renovação automática a qualquer
                    momento através do painel de controle da sua conta. O cancelamento evita cobranças
                    futuras, mas não gera reembolso do período atual, exceto dentro do prazo de 7 dias da
                    compra inicial.
                  </p>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    9. Upgrades e Downgrades
                  </h3>
                  <p className="fz-16 pra ttext__one mb-4" style={{ textAlign: 'justify' }}>
                    Mudanças de plano podem resultar em ajustes proporcionais no valor cobrado. Créditos
                    de valores não utilizados serão aplicados ao próximo ciclo de cobrança. Não há
                    reembolso em dinheiro para downgrades.
                  </p>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    10. Reembolso por Problemas Técnicos
                  </h3>
                  <p className="fz-16 pra ttext__one mb-4" style={{ textAlign: 'justify' }}>
                    Se você enfrentar problemas técnicos significativos que impeçam o uso dos serviços,
                    entre em contato imediatamente. Podemos oferecer extensão do período de uso, créditos
                    ou reembolso, dependendo da situação.
                  </p>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    11. Casos Especiais
                  </h3>
                  <p className="fz-16 pra ttext__one mb-4" style={{ textAlign: 'justify' }}>
                    Situações não cobertas explicitamente por esta política serão avaliadas caso a caso
                    pela nossa equipe de suporte. Reservamo-nos o direito de tomar decisões finais sobre
                    solicitações de reembolso.
                  </p>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    12. Modificações desta Política
                  </h3>
                  <p className="fz-16 pra ttext__one mb-4" style={{ textAlign: 'justify' }}>
                    Reservamo-nos o direito de modificar esta Política de Reembolso a qualquer momento.
                    Alterações entrarão em vigor imediatamente após a publicação. Recomendamos revisar
                    periodicamente esta página.
                  </p>
                </div>

                <div className="text__box">
                  <h3 className="textt36 d-block mb-4">
                    13. Contato
                  </h3>
                  <p className="fz-16 pra ttext__one mb-4" style={{ textAlign: 'justify' }}>
                    Para questões específicas sobre reembolsos ou para iniciar uma solicitação, entre em
                    contato através dos nossos canais de atendimento disponíveis na plataforma.
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

export default RefundPolicy;