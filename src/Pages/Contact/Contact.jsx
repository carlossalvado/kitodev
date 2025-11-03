import React from "react";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import Form from "../../Components/Shared/Form/Form";
import Chat from "../../Components/Chat/Chat";
import { ScrollRestoration } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <PageHeader
        heading={"Dúvidas ou sugestões?"}
        page={"Vamos começar algo incrível juntos!"}
      />
      <section className="contact__section">
        <div className="container">
          <div className="row g-4">
            <div
              className="col-lg-8"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="contact__box">
                <Form isColTwo={false} />
              </div>
            </div>
            <div
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <Chat />
            </div>
          </div>
        </div>
      </section>
      <ScrollRestoration />
    </>
  );
};

export default Contact;
