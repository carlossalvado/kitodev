import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="container mx-Auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Termos de Uso
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Aceitação dos Termos</h2>
              <p className="text-muted-foreground">
                Ao acessar e usar a plataforma Kito Expert, você concorda em cumprir e estar vinculado
                aos seguintes termos e condições de uso. Se você não concordar com alguma parte destes
                termos, não poderá acessar o serviço.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Descrição do Serviço</h2>
              <p className="text-muted-foreground">
                A Kito Expert oferece uma plataforma de automação com inteligência artificial, incluindo
                agentes de WhatsApp, sistema de ligações, agendamento e geração de dashboards. Os
                serviços são fornecidos "como estão" e podem ser modificados ou descontinuados a
                qualquer momento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Cadastro e Conta</h2>
              <p className="text-muted-foreground">
                Você é responsável por manter a confidencialidade de suas credenciais de acesso e por
                todas as atividades que ocorram em sua conta. Você concorda em notificar-nos
                imediatamente sobre qualquer uso não autorizado de sua conta.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Uso Aceitável</h2>
              <p className="text-muted-foreground">
                Você concorda em não usar a plataforma para qualquer propósito ilegal ou proibido por
                estes termos. Isso inclui, mas não se limita a, atividades fraudulentas, disseminação
                de malware, ou violação de direitos de propriedade intelectual.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Propriedade Intelectual</h2>
              <p className="text-muted-foreground">
                Todo o conteúdo presente na plataforma, incluindo textos, gráficos, logos, ícones e
                software, é propriedade da Kito Expert e está protegido por leis de direitos autorais
                internacionais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Limitação de Responsabilidade</h2>
              <p className="text-muted-foreground">
                A Kito Expert não será responsável por quaisquer danos diretos, indiretos, incidentais,
                especiais ou consequenciais resultantes do uso ou incapacidade de usar nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Modificações dos Termos</h2>
              <p className="text-muted-foreground">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações
                entrarão em vigor imediatamente após a publicação na plataforma. O uso continuado do
                serviço após tais modificações constitui sua aceitação dos novos termos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Lei Aplicável</h2>
              <p className="text-muted-foreground">
                Estes termos serão regidos e interpretados de acordo com as leis do Brasil. Qualquer
                disputa relacionada a estes termos será submetida à jurisdição exclusiva dos tribunais
                brasileiros.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Contato</h2>
              <p className="text-muted-foreground">
                Para questões sobre estes Termos de Uso, entre em contato através dos nossos canais de
                atendimento automatizados disponíveis na plataforma.
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

export default Terms;
