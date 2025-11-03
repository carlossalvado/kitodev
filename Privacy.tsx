import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Política de Privacidade e LGPD
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introdução</h2>
              <p className="text-muted-foreground">
                Esta Política de Privacidade descreve como a Kito Expert coleta, usa, armazena e protege
                suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD
                - Lei nº 13.709/2018).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Dados Coletados</h2>
              <p className="text-muted-foreground mb-2">
                Coletamos as seguintes categorias de dados pessoais:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Dados de cadastro: nome, e-mail, telefone</li>
                <li>Dados de uso: interações com a plataforma, logs de acesso</li>
                <li>Dados de comunicação: conversas com agentes de IA, mensagens de WhatsApp</li>
                <li>Dados técnicos: endereço IP, tipo de navegador, dispositivo</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Finalidade do Tratamento</h2>
              <p className="text-muted-foreground mb-2">
                Seus dados são utilizados para:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Fornecer e melhorar nossos serviços de automação com IA</li>
                <li>Processar transações e gerenciar sua conta</li>
                <li>Enviar comunicações relacionadas ao serviço</li>
                <li>Cumprir obrigações legais e regulatórias</li>
                <li>Prevenir fraudes e garantir a segurança da plataforma</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Base Legal</h2>
              <p className="text-muted-foreground">
                O tratamento dos seus dados pessoais é realizado com base no consentimento, execução
                de contrato, cumprimento de obrigação legal e legítimo interesse, conforme previsto na
                LGPD.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Compartilhamento de Dados</h2>
              <p className="text-muted-foreground">
                Não vendemos seus dados pessoais. Podemos compartilhar informações com prestadores de
                serviços terceirizados que nos auxiliam na operação da plataforma, sempre mediante
                contrato e com garantias de segurança adequadas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Armazenamento e Segurança</h2>
              <p className="text-muted-foreground">
                Seus dados são armazenados em servidores seguros com criptografia e medidas técnicas e
                organizacionais apropriadas para proteger contra acesso não autorizado, alteração,
                divulgação ou destruição.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Retenção de Dados</h2>
              <p className="text-muted-foreground">
                Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades
                descritas nesta política, a menos que um período de retenção maior seja exigido ou
                permitido por lei.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Seus Direitos (LGPD)</h2>
              <p className="text-muted-foreground mb-2">
                De acordo com a LGPD, você tem direito a:
              </p>
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
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Uso de Cookies</h2>
              <p className="text-muted-foreground">
                Utilizamos cookies e tecnologias similares para melhorar sua experiência. Consulte
                nossa Política de Cookies para mais informações.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Menores de Idade</h2>
              <p className="text-muted-foreground">
                Nossos serviços não são direcionados a menores de 18 anos. Não coletamos
                intencionalmente dados de menores sem o consentimento dos responsáveis legais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Alterações na Política</h2>
              <p className="text-muted-foreground">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre
                mudanças significativas através da plataforma ou por e-mail.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Encarregado de Dados (DPO)</h2>
              <p className="text-muted-foreground">
                Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de dados, entre em
                contato com nosso Encarregado de Proteção de Dados através dos canais disponíveis na
                plataforma.
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

export default Privacy;
