import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPytorch,
  SiScikitlearn,
  SiApachespark,
  SiPowerbi,
  SiJupyter,
  SiPandas,
  SiR,
  SiPostgresql,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import Python from "../../Assets/TechIcons/Python.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiR fontSize={"24px"} />
        <div className="tech-icons-text">R</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql fontSize={"24px"} />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch fontSize={"24px"} />
        <div className="tech-icons-text">PyTorch</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn fontSize={"24px"} />
        <div className="tech-icons-text">Scikit-learn</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas fontSize={"24px"} />
        <div className="tech-icons-text">Pandas</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachespark fontSize={"24px"} />
        <div className="tech-icons-text">PySpark</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi fontSize={"24px"} />
        <div className="tech-icons-text">Power BI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter fontSize={"24px"} />
        <div className="tech-icons-text">Jupyter</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="JavaScript" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 fontSize={"24px"} />
        <div className="tech-icons-text">HTML5</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 fontSize={"24px"} />
        <div className="tech-icons-text">CSS3</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="Docker" className="tech-icon-images" />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" className="tech-icon-images" />
        <div className="tech-icons-text">Git</div>
      </Col>
    </Row>
  );
}

export default Techstack;
