import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import roadSeg from "../../Assets/Projects/road_segmentation.jpg";
import objRecog from "../../Assets/Projects/object_recognition_results.png";
import clinicalNlp from "../../Assets/Projects/clinical_ir.png";
import iotMalware from "../../Assets/Projects/iot_malware.jpg";
import maritime from "../../Assets/Projects/maritime_real.jpg";
import datathon from "../../Assets/Projects/datathon.png";

function Projects() {
  const { ref: containerRef } = useScrollAnimation('fadeInUp', 0.3);
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }} ref={containerRef}>
          <Col md={4} className="project-card stagger-1">
            <ProjectCard
              imgPath={datathon}
              isBlog={false}
              title="Maritime Auditory Intelligence Datathon 2026"
              description="End-to-end intelligent maritime platform processing 171,750 incidents with 6 specialized ML models: anomaly detection (XGBoost 97.6%), risk classification (Random Forest 92.6%), incident typing (XGBoost 99.9%), cost regression (R²=0.70), temporal forecasting (Prophet), and geographic clustering (HDBSCAN). Integrates heterogeneous AIS data with regulatory compliance for predictive incident management and early warning systems. Next.js dashboard for interactive incident exploration, geographic hotspot visualization, and action prioritization (P0-P4 severity levels)."
              ghLink="https://github.com/EnriquePardoGarcia/Maritime-Auditory-Intelligence-Datathon-2026"
            />
          </Col>

          <Col md={4} className="project-card stagger-2">
            <ProjectCard
              imgPath={roadSeg}
              isBlog={false}
              title="Road Segmentation from Aerial Images"
              description="Semantic segmentation pipeline using deep learning on high-resolution satellite imagery. Built to automatically detect and extract road networks from aerial photos using convolutional architectures."
              ghLink="https://github.com/EnriquePardoGarcia/Road-Segmentation"
            />
          </Col>

          <Col md={4} className="project-card stagger-3">
            <ProjectCard
              imgPath={objRecog}
              isBlog={false}
              title="Object Recognition with Pixel-Level Masks"
              description="Computer Vision pipeline for multi-class object recognition using deep learning. Implements CNNs with pixel-level segmentation masks, data augmentation techniques, and comprehensive evaluation metrics (ROC, F1, Precision, Recall)."
              ghLink="https://github.com/EnriquePardoGarcia/Object-Recognition"
            />
          </Col>

          <Col md={4} className="project-card stagger-4">
            <ProjectCard
              imgPath={clinicalNlp}
              isBlog={false}
              title="Clinical Trial Information Retrieval System"
              description="NLP-based search engine for biomedical text. Implements Lucene indexing, BM25 ranking, embedding-based retrieval with TREC evaluation metrics. Processes clinical trial documents for intelligent querying and information extraction."
              ghLink="https://github.com/EnriquePardoGarcia/Clinical-Trial-Information-Retrieval-System"
            />
          </Col>

          <Col md={4} className="project-card stagger-5">
            <ProjectCard
              imgPath={iotMalware}
              isBlog={false}
              title="IoT Malware Detection with PySpark"
              description="Distributed big data analytics for cybersecurity. Uses Apache Spark for large-scale network traffic analysis, implements anomaly detection algorithms, and identifies malicious IoT device behavior patterns in streaming data environments."
              ghLink="https://github.com/EnriquePardoGarcia/IoT-Malware-Detection-with-PySpark"
            />
          </Col>

          <Col md={4} className="project-card stagger-6">
            <ProjectCard
              imgPath={maritime}
              isBlog={false}
              title="Maritime Visual Classification at Smartports"
              description="Deep learning for maritime port operations. Implements multi-task classification (ship detection, docking status) using PyTorch with ResNet18, comprehensive ablation studies, and real-time inference optimization for smart port environments."
              ghLink="https://github.com/EnriquePardoGarcia/Smartports-Visual-Classifications"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
