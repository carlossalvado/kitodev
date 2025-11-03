import React, { useEffect, useState } from "react";

import sectionStar from "../../assets/img/about/dddd.png";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Development from "./Development";

import AOS from "aos";
import "aos/dist/aos.css";

const tabList = [
  {
    id: 1,
    name: "AGÊNCIA",
    value: "about",
  },
  {
    id: 2,
    name: "WHATSAPP BUSINESS",
    value: "experience",
  },
  {
    id: 3,
    name: "CONTROLE DE AGENDA",
    value: "education",
  },
  {
    id: 4,
    name: "AGENTE DE LIGAÇÕES",
    value: "skills",
  },
  {
    id: 5,
    name: "DESENVOLVIMENTO DE SITES E DASHBOARDS",
    value: "development",
  },
];

const About = () => {
  const [isTabActive, setIsTabAative] = useState("about");
  
  useEffect(() => {
    AOS.init();
  }, []);

  const handleTabClick = (e) => {
    setIsTabAative(e);
  };

  return (
    <>
      <section className="about__section pt-120 pb-120" id="about">
        <div className="container">
          <div className="singletab">
            <ul className="tablinks">
              {tabList.map(({ id, name, value }) => (
                <li
                  key={id}
                  className={`nav-links ${isTabActive === value ? "active" : ""} `}
                >
                  <button onClick={() => handleTabClick(value)} className="tablink">
                    {name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="tabcontents">
              <AboutMe isTabActive={isTabActive} />
              <Experience isTabActive={isTabActive} />
              <Education isTabActive={isTabActive} />
              <Skills isTabActive={isTabActive} />
              <Development isTabActive={isTabActive} />
            </div>
          </div>
        </div>
      </section>
      {/* <Awards /> */}
    </>
  );
};

export default About;

