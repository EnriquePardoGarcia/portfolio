import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useLanguage } from "../../contexts/LanguageContext";
import { translations } from "../../config/translations";

function AboutCard() {
  const { language } = useLanguage();
  const t = (key) => translations[language]?.[key] || translations.es[key] || key;

  const aboutText = language === "es" 
    ? <>
        Construyo <span className="purple">sistemas escalables basados en datos</span> en visión artificial, procesamiento de lenguaje natural, computación distribuida y análisis en tiempo real. Mi trabajo abarca la comprensión semántica de datos visuales, recuperación de información a gran escala, detección de anomalías y sistemas de clasificación inteligentes.
        <br />
        <br />
        Mi <span className="purple">arsenal técnico</span> incluye <span className="purple">frameworks de deep learning</span> (PyTorch, TensorFlow), <span className="purple">sistemas distribuidos</span> (PySpark, Apache Spark, Hadoop), <span className="purple">ingeniería de datos</span> (PostgreSQL, MongoDB, Elasticsearch), <span className="purple">bibliotecas de machine learning</span> (scikit-learn, XGBoost, LightGBM), <span className="purple">NLP y tecnologías de búsqueda</span> (Lucene, transformers, embeddings), y <span className="purple">programación de sistemas</span> (Java, Python).
        <br />
        <br />
        Mi experiencia profesional incluye la construcción de sistemas de datos empresariales donde he trabajado con plataformas de inteligencia de negocios, marcos de calidad de datos e implementaciones de seguridad para pipelines de informes críticos.
        <br />
        <br />
        <span className="purple">Reconocido con 2º lugar en Datathon 2026</span> (ITG & UDC), combino prácticas rigurosas de ingeniería con machine learning impulsado por investigación para entregar sistemas listos para producción.
      </>
    : <>
        I build <span className="purple">scalable data-driven systems</span> across computer vision, natural language processing, distributed computing, and real-time analytics. My work spans semantic understanding of visual data, large-scale information retrieval, anomaly detection, and intelligent classification systems.
        <br />
        <br />
        My <span className="purple">technical arsenal</span> spans <span className="purple">deep learning frameworks</span> (PyTorch, TensorFlow), <span className="purple">distributed systems</span> (PySpark, Apache Spark, Hadoop), <span className="purple">data engineering</span> (PostgreSQL, MongoDB, Elasticsearch), <span className="purple">machine learning libraries</span> (scikit-learn, XGBoost, LightGBM), <span className="purple">NLP & search technologies</span> (Lucene, transformers, embeddings), and <span className="purple">systems programming</span> (Java, Python).
        <br />
        <br />
        My professional experience includes building enterprise data systems where I've worked with business intelligence platforms, data quality frameworks, and security implementations for critical reporting pipelines.
        <br />
        <br />
        <span className="purple">Recognised with 2nd place at Datathon 2026</span> (ITG & UDC), I combine rigorous engineering practices with research-driven machine learning to deliver production-ready systems.
      </>;

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {aboutText}
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> {t("computerVision")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("distributedML")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("productionGrade")}
            </li>
          </ul>

          <p style={{ color: "rgb(94 172 212)" }}>
            {t("dataQuote")}{" "}
          </p>
          <footer className="blockquote-footer">Enrique</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
