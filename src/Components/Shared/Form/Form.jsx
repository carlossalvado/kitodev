import React, { useState } from "react";
import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Form = ({ isColTwo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'isaappglobal@gmail.com',
        subject: 'Novo contato do site Kito Expert'
      };

      // Usar Formspree - você precisa criar uma conta em formspree.io e pegar o endpoint correto
      // Substitua 'YOUR_FORM_ID' pelo ID real do seu formulário no Formspree
      const response = await fetch('https://formspree.io/f/mjkpqran', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'Novo contato do site Kito Expert'
        }),
      });

      if (response.ok) {
        setSubmitMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Erro ao enviar');
      }

    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="replay__box cmn__bg">
      <h3>Deixe sua dúvida ou sugestão.</h3>
      <p>
        Seu endereço de e-mail não será publicado. Os campos obrigatórios estão marcados com um (*)
      </p>
      {submitMessage && (
        <div className={`alert ${submitMessage.includes('sucesso') ? 'alert-success' : 'alert-danger'} mb-3`}>
          {submitMessage}
        </div>
      )}
      <form onSubmit={handleSubmit} className="row g-4">
        <div className={` ${isColTwo ? "col-lg-6" : "col-lg-12"}`}>
          <input
            type="text"
            name="name"
            placeholder="Nome *"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={` ${isColTwo ? "col-lg-6" : "col-lg-12"}`}>
          <input
            type="email"
            name="email"
            placeholder="E-mail *"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-lg-12">
          <textarea
            name="message"
            rows="5"
            placeholder="Sua mensagem *"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="d-flex fw-500 cmn--btn align-items-center gap-2"
          disabled={isSubmitting}
        >
          <span className="get__text">{isSubmitting ? 'Enviando...' : 'Enviar'}</span>
          <span>
            <i className=" fz-20">
              {" "}
              <ArrowRight />{" "}
            </i>
          </span>
        </button>
      </form>
    </div>
  );
};

export default Form;
