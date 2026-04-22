import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/foto_perfil.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.2em", fontWeight: 600 }}>
              About <span className="purple">Me</span>
            </h1>
            <p className="home-about-body">
              I'm
              <i>
                <b className="purple">
                  {" "}
                  Enrique Pardo García{" "}
                </b>
              </i>
              from Palencia, Spain, a
              <b className="purple"> Data Scientist & Data Engineer</b> dedicated to solving complex problems through innovative data solutions.
              <br />
              <br />
              I bring together
              <i>
                <b className="purple">
                  {" "}
                  academic excellence{" "}
                </b>
              </i>
              from the <b className="purple">Universidade da Coruña</b> with practical expertise in building scalable systems that transform raw data into intelligent, impactful outcomes.
              <br />
              <br />
              Passionate about rigorous engineering and continuous learning.
            </p>
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
