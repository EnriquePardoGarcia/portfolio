import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
// import Techstack from "../About/Techstack";
// import Github from "../About/Github";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../config/translations";

function Home() {
  const { language } = useLanguage();
  const t = (key) => translations[language]?.[key] || translations.es[key] || key;
  const { ref: headerRef } = useScrollAnimation('fadeInLeft', 0.1);
  const { ref: logoRef } = useScrollAnimation('fadeInRight', 0.1);
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header" ref={headerRef}>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {t("hello")}
              </h1>

              <h1 className="heading-name">
                <strong className="main-name">ENRIQUE PARDO GARCÍA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} ref={logoRef}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>{t("findMeOn")}</h1>
            <p>
              {t("feelFree")} <span className="purple">{t("connect")} </span>
              {t("withMe")}
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/EnriquePardoGarcia"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/enrique-pardo-garcía-7b4228388"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
