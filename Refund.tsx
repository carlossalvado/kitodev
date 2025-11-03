import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Refund = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Política de Reembolso
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Garantia de Satisfação</h2>
              <p className="text-muted-foreground">
                Na Kito Expert, nos esforçamos para fornecer serviços de alta qualidade. Se você não
                estiver satisfeito com nossos serviços, oferecemos uma política de reembolso clara e
                justa.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Período de Reembolso</h2>
              <p className="text-muted-foreground">
                Você tem até 7 (sete) dias corridos a partir da data de compra para solicitar um
                reembolso, conforme estabelecido pelo Código de Defesa do Consumidor brasileiro (Lei
                8.078/90, Artigo 49).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Condições para Reembolso</h2>
              <p className="text-muted-foreground mb-2">
                Para ser elegível a um reembolso, as seguintes condições devem ser atendidas:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>A solicitação deve ser feita dentro do período de 7 dias</li>
                <li>Você não deve ter violado nossos Termos de Uso</li>
                <li>O uso dos serviços deve estar dentro dos limites aceitáveis</li>
                <li>Não deve haver evidências de abuso ou fraude</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Como Solicitar Reembolso</h2>
              <p className="text-muted-foreground mb-2">
                Para solicitar um reembolso:
              </p>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                <li>Entre em contato através dos nossos canais de atendimento</li>
                <li>Forneça seu número de pedido e email de cadastro</li>
                <li>Explique brevemente o motivo da solicitação (opcional)</li>
                <li>Aguarde a confirmação do processamento</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Processamento do Reembolso</h2>
              <p className="text-muted-foreground">
                Uma vez aprovada sua solicitação, o reembolso será processado e um crédito será
                automaticamente aplicado ao seu método de pagamento original dentro de 5 a 10 dias
                úteis, dependendo da instituição financeira.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Reembolsos Parciais</h2>
              <p className="text-muted-foreground">
                Em algumas situações, apenas reembolsos parciais podem ser concedidos:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Uso significativo dos serviços antes da solicitação</li>
                <li>Créditos ou benefícios já utilizados</li>
                <li>Violações menores dos Termos de Uso</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Reembolsos Negados</h2>
              <p className="text-muted-foreground mb-2">
                Reembolsos serão negados nas seguintes situações:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Solicitação após o período de 7 dias</li>
                <li>Violação grave dos Termos de Uso</li>
                <li>Uso fraudulento ou abusivo dos serviços</li>
                <li>Cancelamento de assinatura sem motivo justificável após uso extensivo</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Assinaturas e Renovações</h2>
              <p className="text-muted-foreground">
                Para assinaturas recorrentes, você pode cancelar a renovação automática a qualquer
                momento através do painel de controle da sua conta. O cancelamento evita cobranças
                futuras, mas não gera reembolso do período atual, exceto dentro do prazo de 7 dias da
                compra inicial.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Upgrades e Downgrades</h2>
              <p className="text-muted-foreground">
                Mudanças de plano podem resultar em ajustes proporcionais no valor cobrado. Créditos
                de valores não utilizados serão aplicados ao próximo ciclo de cobrança. Não há
                reembolso em dinheiro para downgrades.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Reembolso por Problemas Técnicos</h2>
              <p className="text-muted-foreground">
                Se você enfrentar problemas técnicos significativos que impeçam o uso dos serviços,
                entre em contato imediatamente. Podemos oferecer extensão do período de uso, créditos
                ou reembolso, dependendo da situação.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Casos Especiais</h2>
              <p className="text-muted-foreground">
                Situações não cobertas explicitamente por esta política serão avaliadas caso a caso
                pela nossa equipe de suporte. Reservamo-nos o direito de tomar decisões finais sobre
                solicitações de reembolso.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Modificações desta Política</h2>
              <p className="text-muted-foreground">
                Reservamo-nos o direito de modificar esta Política de Reembolso a qualquer momento.
                Alterações entrarão em vigor imediatamente após a publicação. Recomendamos revisar
                periodicamente esta página.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">13. Contato</h2>
              <p className="text-muted-foreground">
                Para questões específicas sobre reembolsos ou para iniciar uma solicitação, entre em
                contato através dos nossos canais de atendimento disponíveis na plataforma.
              </p>
            </section>

            <p className="text-sm text-muted-foreground mt-8">
              Última atualização: Janeiro de 2025
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Refund;
