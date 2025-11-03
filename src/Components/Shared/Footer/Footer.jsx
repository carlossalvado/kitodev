import React from "react";
import { ArrowUpShort, ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const socalList = [
  {
    id: 1,
    platfrom: "Whatsapp",
    icon: <ArrowRight />,
    link: "https://wa.me/5519995126321",
  },
  {
    id: 2,
    platfrom: "Instagram",
    icon: <ArrowRight />,
    link: "https://instagram.com/kito.ai",
  },
  {
    id: 3,
    platfrom: "Youtube",
    icon: <ArrowRight />,
    link: "https://youtube.com/@kitoexpert",
  },

];
const Footer = () => {
  return (
    <footer id="footer" className="footer__section">
      <div className="container">
        <div className="footer__top pt-120 pb-120">
          <div className="fl" data-aos="fade-up" data-aos-duration="1000">
              Automatize <br></br>agora          </div>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="get__content">
                <p>
                  Automação de I.A. para WhatsApp Business com API oficial, agente de ligação inteligente, gestão completa 
                  de agendamentos e criação de sites/dashboards personalizados.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="get__rightcontetn">
                <div className="row g-4">
                  {socalList.map(({ id, icon, platfrom, link }) => {
                    return (
                      <div key={id} className="col-lg-6 col-md-6 col-sm-6">
                        <a href={link} target="_blank" rel="noopener noreferrer" className="social__footer">
                          {platfrom}
                          <i>{icon}</i>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom cmn__bg">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3">
              <div className="company-info">
                <h5 className="base mb-3">Kito Expert</h5>
                <p className="white mb-2">
                  <strong>Agência gerenciada 100% por I.A</strong>
                </p>
                <p className="white mb-2">
                  <strong>Horário de atendimento:</strong> 24 horas, 7 dias por semana
                </p>
                <p className="white mb-2">
                  <strong>Telefone:</strong>{" "}
                  <a
                    href="https://wa.me/5519995126321"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="white whatsapp-link"
                    style={{ textDecoration: 'none' }}
                  >
                    +55 (19) 99512-6321{" "}
                    <FontAwesomeIcon icon={faWhatsapp} style={{ color: '#25d366', fontSize: '16px' }} />
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="company-address">
                <h6 className="base mb-3">Endereço</h6>
                <p className="white small mb-1">
                  Rua Comendador Torlogo Dauntre, 74
                </p>
                <p className="white small mb-1">
                  Bairro: Cambuí
                </p>
                <p className="white small mb-1">
                  CEP: 13025-270
                </p>
                <p className="white small mb-1">
                  Campinas - SP
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="pages-links">
                <h6 className="base mb-3">Políticas</h6>
                <ul className="footer-links">
                  <li><Link to="/terms-of-use" className="white">Termos de Uso</Link></li>
                  <li><Link to="/privacy-policy" className="white">Política de Privacidade</Link></li>
                  <li><Link to="/cookie-policy" className="white">Política de Cookies</Link></li>
                  <li><Link to="/refund-policy" className="white">Política de Reembolso</Link></li>
                  <li><Link to="/data-deletion-policy" className="white">Política de Exclusão de Dados</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="company-details">
                <h6 className="base mb-3">Empresa</h6>
                <p className="white small mb-2">
                  ISA APP - DESENVOLVIMENTO DE PROGRAMAS DE COMPUTADOR LTDA - EPP
                </p>
                <p className="white small mb-2">
                  CNPJ: 61.629.735/0001-73
                </p>
              </div>
            </div>
          </div>
          <div className="copyright text-center mt-4 pt-3 border-top border-secondary">
            <p className="white small mb-3">
              Copyright © 2025 Kito Expert. All rights reserved.
            </p>
            <a href="#about" className="toparrow">
              <i>
                <ArrowUpShort />
              </i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
