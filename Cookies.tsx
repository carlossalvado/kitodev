import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Cookies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Política de Cookies
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. O Que São Cookies?</h2>
              <p className="text-muted-foreground">
                Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você
                visita nossa plataforma. Eles nos ajudam a melhorar sua experiência, lembrar suas
                preferências e entender como você usa nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Tipos de Cookies Utilizados</h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">2.1 Cookies Essenciais</h3>
              <p className="text-muted-foreground">
                Necessários para o funcionamento básico da plataforma. Permitem que você navegue e use
                recursos essenciais, como áreas seguras e autenticação.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">2.2 Cookies de Desempenho</h3>
              <p className="text-muted-foreground">
                Coletam informações sobre como os visitantes usam nossa plataforma, como páginas mais
                visitadas e mensagens de erro. Esses dados nos ajudam a melhorar o funcionamento do
                site.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">2.3 Cookies de Funcionalidade</h3>
              <p className="text-muted-foreground">
                Permitem que a plataforma se lembre de escolhas que você faz (como preferências de
                idioma ou região) e fornecem recursos aprimorados e personalizados.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">2.4 Cookies de Publicidade</h3>
              <p className="text-muted-foreground">
                Usados para fornecer conteúdo mais relevante para você e seus interesses. Também podem
                ser usados para limitar o número de vezes que você vê um anúncio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Cookies de Terceiros</h2>
              <p className="text-muted-foreground">
                Utilizamos serviços de terceiros que podem definir cookies em seu dispositivo,
                incluindo ferramentas de análise e redes sociais. Esses terceiros têm suas próprias
                políticas de privacidade.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Duração dos Cookies</h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">4.1 Cookies de Sessão</h3>
              <p className="text-muted-foreground">
                Temporários e são excluídos quando você fecha o navegador. Usados principalmente para
                autenticação e navegação.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">4.2 Cookies Persistentes</h3>
              <p className="text-muted-foreground">
                Permanecem no seu dispositivo por um período específico ou até você excluí-los
                manualmente. Usados para lembrar preferências e configurações.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Gerenciamento de Cookies</h2>
              <p className="text-muted-foreground mb-2">
                Você pode controlar e gerenciar cookies de várias maneiras:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Através das configurações do seu navegador</li>
                <li>Utilizando ferramentas de opt-out fornecidas por redes de publicidade</li>
                <li>Excluindo cookies já armazenados no seu dispositivo</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Importante: Bloquear ou excluir cookies pode afetar a funcionalidade da plataforma e
                limitar sua experiência.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Como Desativar Cookies</h2>
              <p className="text-muted-foreground mb-2">
                Você pode desativar cookies através das configurações do seu navegador:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Google Chrome: Settings → Privacy and Security → Cookies</li>
                <li>Firefox: Options → Privacy & Security → Cookies</li>
                <li>Safari: Preferences → Privacy → Cookies</li>
                <li>Edge: Settings → Privacy → Cookies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Armazenamento Local</h2>
              <p className="text-muted-foreground">
                Além de cookies, podemos usar outras tecnologias de armazenamento local, como
                localStorage e sessionStorage, para melhorar o desempenho e a funcionalidade da
                plataforma.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Conformidade com LGPD</h2>
              <p className="text-muted-foreground">
                O uso de cookies está em conformidade com a Lei Geral de Proteção de Dados (LGPD).
                Cookies que coletam dados pessoais são utilizados apenas com seu consentimento, exceto
                quando necessários para o funcionamento da plataforma.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Atualizações desta Política</h2>
              <p className="text-muted-foreground">
                Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças em
                nossas práticas ou por razões operacionais, legais ou regulatórias.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Contato</h2>
              <p className="text-muted-foreground">
                Se você tiver dúvidas sobre nossa Política de Cookies, entre em contato através dos
                nossos canais de atendimento disponíveis na plataforma.
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

export default Cookies;
