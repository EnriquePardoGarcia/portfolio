import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../config/translations";
import roadSeg from "../../Assets/Projects/road_segmentation.jpg";
import objRecog from "../../Assets/Projects/object_recognition_results.png";
import clinicalNlp from "../../Assets/Projects/clinical_ir.png";
import iotMalware from "../../Assets/Projects/iot_malware.jpg";
import maritime from "../../Assets/Projects/maritime_real.jpg";
import datathon from "../../Assets/Projects/datathon.png";

function Projects() {
  const { language } = useLanguage();
  const t = (key) => translations[language]?.[key] || translations.es[key] || key;
  const { ref: containerRef } = useScrollAnimation('fadeInUp', 0.3);
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {language === "es" ? (
            <>
              Mis {t("recentProjects")} <strong className="purple">{t("projectsSection")}</strong>
            </>
          ) : (
            <>
              My {t("recentProjects")} <strong className="purple">{t("projectsSection")}</strong>
            </>
          )}
        </h1>
        <p style={{ color: "var(--text-color)" }}>
          {t("hereAreProjects")}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }} ref={containerRef}>
          <Col md={4} className="project-card stagger-1">
            <ProjectCard
              imgPath={datathon}
              isBlog={false}
              title={t("maritimeAuditory")}
              description={t("maritimeAuditoryDesc")}
              ghLink="https://github.com/EnriquePardoGarcia/Maritime-Auditory-Intelligence-Datathon-2026"
            />
          </Col>

          <Col md={4} className="project-card stagger-2">
            <ProjectCard
              imgPath={roadSeg}
              isBlog={false}
              title={t("roadSegmentationTitle")}
              description={t("roadSegmentationDesc")}
              ghLink="https://github.com/EnriquePardoGarcia/Road-Segmentation"
            />
          </Col>

          <Col md={4} className="project-card stagger-3">
            <ProjectCard
              imgPath={objRecog}
              isBlog={false}
              title={t("objectRecognitionTitle")}
              description={t("objectRecognitionDesc")}
              ghLink="https://github.com/EnriquePardoGarcia/Object-Recognition"
            />
          </Col>

          <Col md={4} className="project-card stagger-4">
            <ProjectCard
              imgPath={clinicalNlp}
              isBlog={false}
              title={t("clinicalTrialTitle")}
              description={t("clinicalTrialDesc")}
              ghLink="https://github.com/EnriquePardoGarcia/Clinical-Trial-Information-Retrieval-System"
            />
          </Col>

          <Col md={4} className="project-card stagger-5">
            <ProjectCard
              imgPath={iotMalware}
              isBlog={false}
              title={t("iotMalwareTitle")}
              description={t("iotMalwareDesc")}
              ghLink="https://github.com/EnriquePardoGarcia/IoT-Malware-Detection-with-PySpark"
            />
          </Col>

          <Col md={4} className="project-card stagger-6">
            <ProjectCard
              imgPath={maritime}
              isBlog={false}
              title={t("maritimeVisualTitle")}
              description={t("maritimeVisualDesc")}
              ghLink="https://github.com/EnriquePardoGarcia/Smartports-Visual-Classifications"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
