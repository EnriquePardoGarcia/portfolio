import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaWindows, FaLinux, FaRocket } from "react-icons/fa";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaWindows fontSize={"24px"} />
        <div className="tech-icons-text">Windows</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLinux fontSize={"24px"} />
        <div className="tech-icons-text">Linux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={vsCode} alt="VS Code" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaRocket fontSize={"24px"} />
        <div className="tech-icons-text">Antigravity</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
