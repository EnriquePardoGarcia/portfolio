import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I build <span className="purple">scalable data-driven systems</span> across computer vision, natural language processing, distributed computing, and real-time analytics. My work spans semantic understanding of visual data, large-scale information retrieval, anomaly detection, and intelligent classification systems.
            <br />
            <br />
            My technical arsenal spans <span className="purple">deep learning frameworks</span> (PyTorch, TensorFlow), <span className="purple">distributed systems</span> (PySpark, Apache Spark, Hadoop), <span className="purple">data engineering</span> (PostgreSQL, MongoDB, Elasticsearch), <span className="purple">machine learning libraries</span> (scikit-learn, XGBoost, LightGBM), <span className="purple">NLP & search technologies</span> (Lucene, transformers, embeddings), and <span className="purple">systems programming</span> (Java, Python). I architect solutions using transfer learning, ensemble methods, and scalable pipelines.
            <br />
            <br />
            My professional experience includes building enterprise data systems where I've worked with business intelligence platforms, data quality frameworks, and security implementations for critical reporting pipelines.
            <br />
            <br />
            Recognised with <span className="purple">2nd place at Datathon 2026</span> (ITG & UDC), I combine rigorous engineering practices with research-driven machine learning to deliver production-ready systems.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Computer vision & semantic segmentation
            </li>
            <li className="about-activity">
              <ImPointRight /> Distributed ML pipelines with PySpark & Spark
            </li>
            <li className="about-activity">
              <ImPointRight /> Production-grade deep learning systems
            </li>
          </ul>

          <p style={{ color: "rgb(94 172 212)" }}>
            "Data drives impact. Engineering delivers value."{" "}
          </p>
          <footer className="blockquote-footer">Enrique</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
