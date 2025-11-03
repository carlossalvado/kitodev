import React from "react";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import { ScrollRestoration } from "react-router-dom";

const CookiePolicy = () => {
  return (
    <>
      <PageHeader
        heading={"Política de Cookies"}
        page={"Gestão de Cookies e Tecnologias"}
      />
      <section className="service__details overhid pb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="ser__left__details">
                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    Política de Cookies - Kito Expert
                  </h3>
                  <p className="fz-16 pra ttext__one mb-4" style={{ textAlign: 'justify' }}>
                    Esta Política de Cookies explica como o Kito Expert utiliza cookies e tecnologias similares em nosso site e serviços, em conformidade com a Lei Geral de Proteção de Dados (LGPD) e o Regulamento Geral de Proteção de Dados (GDPR).
                  </p>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    1. O que são Cookies?
                  </h3>
                  <p className="fz-16 pra mb-4" style={{ textAlign: 'justify' }}>
                    Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita nosso site. Eles nos ajudam a fornecer uma experiência personalizada e melhorar nossos serviços.
                  </p>
                  <div className="abox p-4" style={{ background: 'rgba(201, 243, 29, 0.1)', border: '1px solid rgba(201, 243, 29, 0.3)' }}>
                    <h5 className="mb-3" style={{ color: 'var(--base)' }}>Tipos de Cookies Utilizados</h5>
                    <div className="row g-3">
                      <div className="col-md-3">
                        <div className="text-center">
                          <div className="rounded-circle mx-auto mb-2" style={{ width: '40px', height: '40px', background: 'rgba(201, 243, 29, 0.2)' }}>
                            <span className="d-block pt-2" style={{ color: 'var(--base)', fontWeight: 'bold' }}>E</span>
                          </div>
                          <small>Essenciais</small>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="text-center">
                          <div className="rounded-circle mx-auto mb-2" style={{ width: '40px', height: '40px', background: 'rgba(0, 123, 255, 0.2)' }}>
                            <span className="d-block pt-2" style={{ color: '#007bff', fontWeight: 'bold' }}>F</span>
                          </div>
                          <small>Funcionais</small>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="text-center">
                          <div className="rounded-circle mx-auto mb-2" style={{ width: '40px', height: '40px', background: 'rgba(255, 193, 7, 0.2)' }}>
                            <span className="d-block pt-2" style={{ color: '#ffc107', fontWeight: 'bold' }}>A</span>
                          </div>
                          <small>Analíticos</small>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="text-center">
                          <div className="rounded-circle mx-auto mb-2" style={{ width: '40px', height: '40px', background: 'rgba(220, 53, 69, 0.2)' }}>
                            <span className="d-block pt-2" style={{ color: '#dc3545', fontWeight: 'bold' }}>M</span>
                          </div>
                          <small>Marketing</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    2. Cookies Essenciais
                  </h3>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="abox p-4" style={{ background: 'rgba(201, 243, 29, 0.1)', border: '1px solid rgba(201, 243, 29, 0.3)' }}>
                        <h6 className="mb-3" style={{ color: 'var(--base)' }}>Necessários para o Funcionamento</h6>
                        <ul className="list-unstyled small">
                          <li>• Autenticação de usuário</li>
                          <li>• Segurança da sessão</li>
                          <li>• Manutenção do carrinho</li>
                          <li>• Preferências de idioma</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="abox p-4" style={{ background: 'rgba(201, 243, 29, 0.1)', border: '1px solid rgba(201, 243, 29, 0.3)' }}>
                        <h6 className="mb-3" style={{ color: 'var(--base)' }}>Duração</h6>
                        <p className="small">Sessão ou até 1 ano (dependendo da função)</p>
                        <p className="small mb-0"><strong>Consentimento:</strong> Não requer (essenciais)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    3. Cookies Funcionais
                  </h3>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="abox p-4" style={{ background: 'rgba(0, 123, 255, 0.1)', border: '1px solid rgba(0, 123, 255, 0.3)' }}>
                        <h6 className="mb-3" style={{ color: '#007bff' }}>Melhoram a Experiência</h6>
                        <ul className="list-unstyled small">
                          <li>• Lembrar preferências</li>
                          <li>• Configurações personalizadas</li>
                          <li>• Histórico de navegação</li>
                          <li>• Tema escuro/claro</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="abox p-4" style={{ background: 'rgba(0, 123, 255, 0.1)', border: '1px solid rgba(0, 123, 255, 0.3)' }}>
                        <h6 className="mb-3" style={{ color: '#007bff' }}>Duração e Consentimento</h6>
                        <p className="small">Até 2 anos</p>
                        <p className="small mb-0"><strong>Consentimento:</strong> Opcional (LGPD/GDPR)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    4. Cookies Analíticos
                  </h3>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="abox p-4" style={{ background: 'rgba(255, 193, 7, 0.1)', border: '1px solid rgba(255, 193, 7, 0.3)' }}>
                        <h6 className="mb-3" style={{ color: '#ffc107' }}>Métricas de Uso</h6>
                        <ul className="list-unstyled small">
                          <li>• Páginas mais visitadas</li>
                          <li>• Tempo de permanência</li>
                          <li>• Taxa de conversão</li>
                          <li>• Origem do tráfego</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="abox p-4" style={{ background: 'rgba(255, 193, 7, 0.1)', border: '1px solid rgba(255, 193, 7, 0.3)' }}>
                        <h6 className="mb-3" style={{ color: '#ffc107' }}>Ferramentas Utilizadas</h6>
                        <p className="small">Google Analytics, Hotjar</p>
                        <p className="small mb-0"><strong>Consentimento:</strong> Obrigatório (LGPD/GDPR)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    5. Cookies de Marketing
                  </h3>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="abox p-4" style={{ background: 'rgba(220, 53, 69, 0.1)', border: '1px solid rgba(220, 53, 69, 0.3)' }}>
                        <h6 className="mb-3" style={{ color: '#dc3545' }}>Publicidade Personalizada</h6>
                        <ul className="list-unstyled small">
                          <li>• Remarketing</li>
                          <li>• Publicidade direcionada</li>
                          <li>• Recomendações personalizadas</li>
                          <li>• A/B Testing</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="abox p-4" style={{ background: 'rgba(220, 53, 69, 0.1)', border: '1px solid rgba(220, 53, 69, 0.3)' }}>
                        <h6 className="mb-3" style={{ color: '#dc3545' }}>Plataformas</h6>
                        <p className="small">Google Ads, Facebook Pixel, LinkedIn</p>
                        <p className="small mb-0"><strong>Consentimento:</strong> Obrigatório (LGPD/GDPR)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    6. Controle de Cookies
                  </h3>
                  <p className="fz-16 pra mb-4" style={{ textAlign: 'justify' }}>
                    Você tem controle sobre os cookies através das seguintes opções:
                  </p>
                  <div className="row g-4">
                    <div className="col-md-3">
                      <div className="abox p-3 text-center" style={{ background: 'rgba(40, 167, 69, 0.1)', border: '1px solid rgba(40, 167, 69, 0.3)' }}>
                        <h6 className="mb-2" style={{ color: '#28a745', fontSize: '14px' }}>Banner de Cookies</h6>
                        <p className="small">Aceitar ou rejeitar categorias</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="abox p-3 text-center" style={{ background: 'rgba(40, 167, 69, 0.1)', border: '1px solid rgba(40, 167, 69, 0.3)' }}>
                        <h6 className="mb-2" style={{ color: '#28a745', fontSize: '14px' }}>Configurações</h6>
                        <p className="small">Painel de controle no site</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="abox p-3 text-center" style={{ background: 'rgba(40, 167, 69, 0.1)', border: '1px solid rgba(40, 167, 69, 0.3)' }}>
                        <h6 className="mb-2" style={{ color: '#28a745', fontSize: '14px' }}>Navegador</h6>
                        <p className="small">Configurações do browser</p>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="abox p-3 text-center" style={{ background: 'rgba(40, 167, 69, 0.1)', border: '1px solid rgba(40, 167, 69, 0.3)' }}>
                        <h6 className="mb-2" style={{ color: '#28a745', fontSize: '14px' }}>Ferramentas</h6>
                        <p className="small">Your Online Choices, etc.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text__box mb__cus60">
                  <h3 className="textt36 d-block mb-4">
                    7. Cookies de Terceiros
                  </h3>
                  <p className="fz-16 pra mb-4" style={{ textAlign: 'justify' }}>
                    Alguns cookies são definidos por serviços de terceiros que aparecem em nossas páginas. Não temos controle sobre esses cookies.
                  </p>
                  <div className="abox p-4" style={{ background: 'rgba(108, 117, 125, 0.1)', border: '1px solid rgba(108, 117, 125, 0.3)' }}>
                    <h6 className="mb-3" style={{ color: '#6c757d' }}>Exemplos de Terceiros</h6>
                    <div className="row g-3">
                      <div className="col-md-3">
                        <small>• Google Analytics</small>
                      </div>
                      <div className="col-md-3">
                        <small>• Facebook Pixel</small>
                      </div>
                      <div className="col-md-3">
                        <small>• Hotjar</small>
                      </div>
                      <div className="col-md-3">
                        <small>• Stripe/PayPal</small>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text__box">
                  <h3 className="textt36 d-block mb-4">
                    8. Atualizações e Contato
                  </h3>
                  <p className="fz-16 pra mb-4" style={{ textAlign: 'justify' }}>
                    Podemos atualizar esta Política de Cookies periodicamente. Recomendamos revisar esta página regularmente.
                  </p>
                  <div className="abox p-4" style={{ background: 'rgba(201, 243, 29, 0.1)', border: '1px solid rgba(201, 243, 29, 0.3)' }}>
                    <p className="mb-2"><strong>Email:</strong> privacy@kitoexpert.com</p>
                    <p className="mb-2"><strong>DPO:</strong> dpo@kitoexpert.com</p>
                    <p className="mb-0"><strong>Telefone:</strong> +55 (11) 99999-9999</p>
                  </div>
                  <p className="fz-14 mt-3" style={{ color: 'var(--pra)' }}>
                    <em>Última atualização: Outubro de 2024</em>
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

export default CookiePolicy;