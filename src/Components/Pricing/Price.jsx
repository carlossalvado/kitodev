import React from "react";
import { Link } from "react-router-dom";

const Price = ({ image, planName, price, time, fetcher, id, isAnnual, isCombo, servicesList, selectedServices, setSelectedServices, comboPeriod, setComboPeriod }) => {
  const hasMonthly = planName !== "Agente de Ligações";

  return (
    <div
      className="col-lg-4 col-md-6 col-sm-6"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div
        className="process__item price__item"
      >
        <div className="pri__iconbox">
          <img src={image} alt="img" />
        </div>
        <h4 className="white mb-24">{planName}</h4>
        <h2 className="big__title mb-24">
          {price}
          {price && <span>/{time}</span>}
        </h2>
        {isCombo ? (
          <div className="combo__selector">
            <div className="combo__period mb-3">
              <div className="d-flex justify-content-center gap-2">
                <button
                  className={`btn btn-sm ${!comboPeriod ? '' : ''}`}
                  style={{
                    backgroundColor: !comboPeriod ? '#c9f31d' : 'transparent',
                    color: !comboPeriod ? 'black' : '#c9f31d',
                    border: '1px solid #c9f31d',
                    marginRight: '5px'
                  }}
                  onClick={() => setComboPeriod(false)}
                >
                  Mensal
                </button>
                <button
                  className={`btn btn-sm ${comboPeriod ? '' : ''}`}
                  style={{
                    backgroundColor: comboPeriod ? '#c9f31d' : 'transparent',
                    color: comboPeriod ? 'black' : '#c9f31d',
                    border: '1px solid #c9f31d'
                  }}
                  onClick={() => setComboPeriod(true)}
                >
                  Anual
                  {selectedServices.length >= 2 && <span className="badge bg-success ms-1">-10%</span>}
                </button>
              </div>
            </div>
            <h5 className="mb-3" style={{ color: 'white' }}>Selecione os serviços:</h5>
            {servicesList.map((service) => (
              <div key={service.id} className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={`service-${service.id}`}
                  checked={selectedServices.some(s => s.id === service.id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedServices([...selectedServices, service]);
                    } else {
                      setSelectedServices(selectedServices.filter(s => s.id !== service.id));
                    }
                  }}
                />
                <label className="form-check-label" htmlFor={`service-${service.id}`} style={{ color: 'white' }}>
                  {service.name} - R${(comboPeriod ? service.annualPrice : service.monthlyPrice).toFixed(2).replace('.', ',')}
                </label>
              </div>
            ))}
          </div>
        ) : (
          <ul className="pri__list">
            {fetcher?.map((fet, index) => (
              <li key={index}>{fet}</li>
            ))}
          </ul>
        )}
        {!hasMonthly && !isAnnual && (
          <div className="text-center mb-3">
            <small style={{ color: 'white' }}>Apenas plano anual disponível</small>
          </div>
        )}
        {(!(!hasMonthly && !isAnnual) && !(isCombo && selectedServices.filter(s => s.name !== "Criador de Sites").length < 2)) && (
          <Link to={"/contact"} 
            className="cmn--btn d-flex align-items-center justify-content-center gap-2 w-100"
          >
            <span>CONTRATAR</span>
            <span>
              <i className="bi bi-arrow-right fz-20"></i>
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Price;
