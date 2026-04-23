import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../config/translations";

function About() {
  const { language } = useLanguage();
  const t = (key) => translations[language]?.[key] || translations.es[key] || key;
  const { ref: contentRef } = useScrollAnimation('fadeInLeft', 0.2);
  const { ref: imgRef } = useScrollAnimation('fadeInRight', 0.2);
  const { ref: skillsRef } = useScrollAnimation('fadeInUp', 0.3);
  return (
    <>
      {" "}
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
              ref={contentRef}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                {t("knowAbout")}
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
              ref={imgRef}
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>
          <div ref={skillsRef}>
            <h1 className="project-heading">
              {language === "es" ? (
                <>{t("skillsetLabel1ES")} <strong className="purple">{t("skillsetLabel2ES")}</strong></>
              ) : (
                <>{t("skillsetLabel1EN")} <strong className="purple">{t("skillsetLabel2EN")}</strong></>
              )}
            </h1>

            <Techstack />

            <h1 className="project-heading">
              {language === "es" ? (
                <><strong className="purple">{t("toolsLabel1ES")}</strong> {t("toolsLabel2ES")}</>
              ) : (
                <><strong className="purple">{t("toolsLabel1EN")}</strong> {t("toolsLabel2EN")}</>
              )}
            </h1>
            <Toolstack />

            <Github />
          </div>
        </Container>
      </Container>
    </>
  );
}

export default About;
