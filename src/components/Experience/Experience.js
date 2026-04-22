import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import enxenioLogo from "../../Assets/logo.png";
import "./Experience.css";

function Experience() {
  const { ref: containerRef } = useScrollAnimation('fadeInUp', 0.3);
  return (
    <>
      <Particle />
      <Container fluid className="experience-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col md={12}>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", paddingTop: "20px" }}>
                Professional <strong className="purple">Experience</strong>
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
                    />
                  </Col>
                  <Col md={9}>
                    <div className="experience-content">
                      <div className="experience-header">
                        <h3>
                          <span className="purple">Data Engineer Intern</span>
                        </h3>
                        <span className="experience-date">2024 - 2025</span>
                      </div>
                      <p className="experience-company">
                        <span className="purple">ENXENIO S.L.</span> — Galicia, Spain
                      </p>
                      <ul className="experience-list">
                        <li>Optimized Power BI dashboards and enterprise reporting pipelines for financial data analysis</li>
                        <li>Conducted data quality audits with PostgreSQL and implemented validation frameworks</li>
                        <li>Implemented Row-Level Security (RLS) policies for secure multi-tenant data access</li>
                        <li>Designed and maintained ETL processes for large-scale financial datasets</li>
                        <li>Collaborated with cross-functional teams to deliver scalable data solutions</li>
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
