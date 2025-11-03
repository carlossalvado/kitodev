import React from "react";
import manimg from "../../../assets/img/banner/banner-man.png";
const Preloader = () => {
  return (
    <div className="preloader__Kito Expert - Seu Agente de I.A.">
      <div className="box text-center">
        <div className="Kito Expert - Seu Agente de I.A. mb-10">
          <img src={manimg} alt="img" />
        </div>
        <span className="fz-30 mati fw-600 text-uppercase">Kito Expert - Seu Agente de I.A.</span>
      </div>
    </div>
  );
};

export default Preloader;
