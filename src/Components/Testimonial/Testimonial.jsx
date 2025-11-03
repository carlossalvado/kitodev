import React from "react";
import { StarFill } from "react-bootstrap-icons";
import { Swiper, SwiperSlide } from "swiper/react";

import quote from "../../assets/img/testimonial/quote.png";
import man1 from "../../assets/img/testimonial/man1.png";
import man2 from "../../assets/img/testimonial/man2.png";
import man3 from "../../assets/img/testimonial/man3.png";
import testiArrow from "../../assets/img/testimonial/testi-arrow.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay } from "swiper/modules";

const reviewList = [
  {
    id: 1,
    name: "Kito Expert",
    position: "----",
    review: `Eu sou Kito Expert, seu parceiro comercial e consultor principal. Como especialista em todos os produtos da agência, estou programado para resolver suas dúvidas e guiar você em cada passo, garantindo que encontre a solução perfeita para suas necessidades. Conte comigo para um atendimento completo e inteligente, focado em seus resultados.

`,
    stars: [<StarFill className="ratting fz-20" />],
  },
  {
    id: 2,
    name: "Rob",
    position: "----",
    review: `Eu sou Rob, o cérebro por trás do seu suporte. Controle todos os tickets de e-mail e mensagens de WhatsApp, e garanto respostas rápidas e eficazes. Minha inteligência artificial é integrada a um vasto banco de dados e potencializada por uma linha neural que aprimora meu aprendizado constantemente, auxiliando nossos clientes 24 horas por dia, 7 dias por semana, com soluções precisas.

`,
    stars: [<StarFill className="ratting fz-20" />],
  },
  {
    id: 3,
    name: "Carlos",
    position: "----",
    review: `Eu sou Carlos, seu especialista em WhatsApp. 
    Minha missão é simplificar a configuração dos seus agentes de WhatsApp. 
    Com a minha ajuda, você terá seu atendimento automatizado e inteligente funcionando 
    perfeitamente em questão de minutos, pronto para interagir com seus clientes de forma eficaz.

`,
    stars: [<StarFill className="ratting fz-20" />],
  },
  {
    id: 4,
    name: "Matheus",
    position: "----",
    review: `Eu sou Matheus, o expert em transformar 
    sua voz em resultados. Comigo, a configuração dos seus agentes de Voz será rápida e sem complicações. 
    Eu garanto que seus agentes de IA estarão prontos para vender, cobrar ou se comunicar de forma impactante 
    e autônoma, operando com a máxima eficiência.`,
    stars: [<StarFill className="ratting fz-20" />],
  },
  {
    id: 5,
    name: "Isa",
    position: "Business Owner",
    review: `Eu sou Isa, sua referência em agendamentos. 
    Domino cada detalhe do sistema e estou aqui para auxiliar na configuração 
    e tirar todas as suas dúvidas. Com minha inteligência, você terá controle 
    total sobre seus agendamentos, otimizando a gestão e garantindo que cada compromisso
     seja um sucesso, sem falhas.`,
    stars: [<StarFill className="ratting fz-20" />],
  },
];
const Testimonial = () => {
  return (
    <section className="testimonial__section pt-120 pb-120" id="testimonial">
      <div className="container">
        <div className="project__head text-center">
          <span className="common__sub" data-aos="fade-up" data-aos-duration="1000">
            Força de I.A.
          </span>
          <h2 className="fw-500" data-aos="fade-down" data-aos-duration="1000">
Kito Expert            <span className="d-block"> Agentes de trabalho </span>
          </h2>
        </div>
        <div
          className="testimonial__v1wrap pb-120"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="swiper testimonial__slidewrap">
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  speed={3000}
                  pagination={{
                    clickable: true,
                    el: ".swiper-pagination3",
                  }}
                  autoplay={{
                    delay: 2000,
                  }}
                  loop={true}
                  modules={[Pagination, Autoplay]}
                >
                  {/* <div className="swiper-wrapper"> */}
                  {reviewList.map(({ id, name, position, review, stars }) => {
                    return (
                      <SwiperSlide key={id}>
                        <div  className="test__slide swiper-slide">
                          <div className="d-flex mb-40 align-items-center gap-2">
                            {stars.map((star, index) => (
                              <i key={index}>{star}</i>
                            ))}
                          </div>
                          <p>{review}</p>
                          <h4 className="base mb-2">{name}</h4>
                          <span className="fz-18 ptext">{position} </span>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                  {/* </div> */}
                </Swiper>

                <div className="swiper-pagination3"></div>
              </div>
            </div>
          </div>
          <div className="quote">
            <img src={quote} alt="img" />
          </div>
          <div className="man1">
            <img src={man1} alt="img" />
          </div>
          <div className="man2">
            <img src={man3} alt="img" />
          </div>
          <div className="man3">
            <img src={man2} alt="img" />
          </div>
          <div className="test__shape">
            <img src={testiArrow} alt="img" />
          </div>
        </div>  
      </div>
    </section>
  );
};

export default Testimonial;
