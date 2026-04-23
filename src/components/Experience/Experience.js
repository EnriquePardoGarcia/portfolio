import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../config/translations";
import enxenioLogo from "../../Assets/logo.png";
import "./Experience.css";

function Experience() {
  const { language } = useLanguage();
  const t = (key) => translations[language]?.[key] || translations.es[key] || key;
  const { ref: containerRef } = useScrollAnimation('fadeInUp', 0.3);
  return (
    <>
      <Particle />
      <Container fluid className="experience-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col md={12}>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", paddingTop: "20px" }}>
                {t("professionalExperience")}
              </h1>
            </Col>
          </Row>

          <Row style={{ justifyContent: "center", paddingBottom: "50px" }} ref={containerRef}>
            <Col md={10}>
              <div className="experience-card">
                <Row>
                  <Col md={3} className="experience-logo-container">
                    <img 
                      src={enxenioLogo} 
                      alt="ENXENIO S.L." 
                      className="experience-logo"
                      style={{
                        padding: "10px",
                        backgroundColor: "#ffffff",
                        borderRadius: "8px",
                        boxShadow: "0 0 15px rgba(255, 255, 255, 0.1)"
                      }}
                    />
                  </Col>
                  <Col md={9}>
                    <div className="experience-content">
                      <div className="experience-header">
                        <h3>
                          <span className="purple">{t("dataEngineerIntern")}</span>
                        </h3>
                        <span className="experience-date">{t("septemberOctober2025")}</span>
                      </div>
                      <p className="experience-company">
                        <span className="purple">{t("enxenio")}</span> — {t("galiciaSpain")}
                      </p>
                      <ul className="experience-list">
                        <li>{t("optimizedBI")}</li>
                        <li>{t("conductedDataQuality")}</li>
                        <li>{t("implementedRLS")}</li>
                        <li>{t("designedETL")}</li>
                        <li>{t("collaboratedCrossFunctional")}</li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Experience;
