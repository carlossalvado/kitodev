import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import {
  Facebook,
  Twitter,
  Linkedin,
  Globe,
  Instagram,
  PlayFill,
} from "react-bootstrap-icons";

import bannerMan from "../../assets/img/banner/banner-man.png";
import scrollDown from "../../assets/img/banner/scroll-down.png";
import dial from "../../assets/img/banner/dial.png";
import bnArrow from "../../assets/img/banner/bn-arrow.png";
import VideoPlay from "../Shared/VideoPlay/VideoPlay";

const socalIcon = [
  
  
];
const Banner = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [position, setPosition] = useState(false);

  useEffect(() => {
    if(!position){
      setPosition(true)
    }
  }, []);

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  return (
    <section id="home">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="banner__content">
              <Link to={""} className="bn__currently">
                <span className="d-block">
                  Agente de Inteligência Artificial
                </span>
                <span className="d-flex gap-4 align-items-center">
                  O Parceiro de IA que transforma seu negócio em oportunidade.
                  <i className="bi bi-arrow-up-right"></i>
                </span>
              </Link>
              <h1>
                <span className="hone"> Kito</span>
                <span className="d-block designers" data-text="Expert">
                  Expert
                </span>
              </h1>
              <div className="video__area">
                <img src={bnArrow} className="vid__arrow" alt="seta" />
                <div onClick={openLightbox} className="video__80 video-btn">
                  <i>
                    <PlayFill />
                  </i>
                </div>
                <span className="proces">Processos</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className={`banner__thumb  ${
                position  ? "right_up_animat" : "right_up"
              }`}
             
            >
              <img src={bannerMan} alt="man-img" />
            </div>
          </div>
        </div>
      </div>
      <div className="banner__leftinfo">
        <div className="left__infomobile">
          <Link to={""}>
            <img src={dial} alt="img" />
          </Link>
          <Link to={""}>+55(19)99512-6321</Link>
        </div>
        <div className="right__infoscroll">
          <HashLink smooth to="#about" className="scroll">
            role para baixo
          </HashLink>
          <HashLink smooth to="#about" className="scroll__bar">
            <img src={scrollDown} alt="img" />
          </HashLink>
        </div>
      </div>
      <div className="banner__rightinfo">
        <div className="right__infoscroll">
          <a href="#footer" className="scroll">
            Siga-me
          </a>
          <a href="#footer" className="scroll__bar">
            <img src={scrollDown} alt="img" />
          </a>
        </div>
        <div className="banner__xlsocial">
          <ul className="banner__soci d-grid justify-content-center">
            {socalIcon.map(({ icon, id }) => {
              return (
                <li key={id}>
                  <Link to={""} >
                    <i>{icon}</i>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {lightboxOpen && (
        <VideoPlay
          setLightboxOpen={setLightboxOpen}
          url="https://www.youtube.com/embed/tgbNymZ7vqY"
        />
      )}
    </section>
  );
};

export default Banner;
