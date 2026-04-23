import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/foto_perfil.png";
import Tilt from "react-parallax-tilt";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../config/translations";

function Home2() {
  const { language } = useLanguage();
  const t = (key) => translations[language]?.[key] || translations.es[key] || key;

  const highlightKeywords = (text) => {
    const keywordsES = ["Soy", "Científico e Ingeniero de Datos", "datos", "escalables", "inteligentes", "rigurosa"];
    const keywordsEN = ["I'm", "Data Scientist & Data Engineer", "data", "scalable", "intelligent", "rigorous"];
    const keywords = language === "es" ? keywordsES : keywordsEN;
    
    let result = text;
    keywords.forEach((keyword) => {
      const regex = new RegExp(`(${keyword})`, "gi");
      result = result.split(regex).map((part) => 
        regex.test(part) ? `<span style="color: #14b8a6; font-weight: 500;">${part}</span>` : part
      ).join("");
    });
    
    return result;
  };

  const description = language === "es" ? t("homeAboutDescriptionES") : t("homeAboutDescription");

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.2em", fontWeight: 600 }}>
              {t("aboutMe")}
            </h1>
            <p className="home-about-body" dangerouslySetInnerHTML={{ __html: highlightKeywords(description) }} />
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                alt="Enrique Pardo García"
                style={{
                  width: "260px",
                  height: "260px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  border: "4px solid #c770f0",
                  boxShadow: "0 0 25px rgba(199, 112, 240, 0.4)",
                }}
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
