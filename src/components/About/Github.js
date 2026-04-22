import React, { useEffect, useRef, useState } from "react";
import { Row, Col } from "react-bootstrap";

const skills = [
  { label: "Deep Learning", value: 90, color: "#c770f0" },
  { label: "Computer Vision", value: 87, color: "#a855f7" },
  { label: "NLP & Search", value: 84, color: "#9333ea" },
  { label: "Distributed Systems", value: 81, color: "#c770f0" },
  { label: "Data Engineering", value: 85, color: "#a855f7" },
  { label: "ML & Statistics", value: 88, color: "#9333ea" },
];

const RADIUS = 52;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function SkillRing({ label, value, color, animate }) {
  const progress = animate ? value / 100 : 0;
  const dashOffset = CIRCUMFERENCE * (1 - progress);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "16px" }}>
      <svg width="130" height="130" viewBox="0 0 130 130">
        <circle
          cx="65"
          cy="65"
          r={RADIUS}
          fill="none"
          stroke="#1a1a2e"
          strokeWidth="10"
        />
        <circle
          cx="65"
          cy="65"
          r={RADIUS}
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={dashOffset}
          transform="rotate(-90 65 65)"
          style={{
            transition: animate ? "stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1)" : "none",
          }}
        />
        <text
          x="65"
          y="60"
          textAnchor="middle"
          fill="white"
          fontSize="20"
          fontWeight="bold"
          fontFamily="sans-serif"
        >
          {animate ? `${value}%` : "0%"}
        </text>
        <text
          x="65"
          y="80"
          textAnchor="middle"
          fill="#aaaaaa"
          fontSize="10"
          fontFamily="sans-serif"
        >
          proficiency
        </text>
      </svg>
      <p style={{ color: color, fontWeight: "600", marginTop: "8px", fontSize: "0.95em", textAlign: "center" }}>
        {label}
      </p>
    </div>
  );
}

function Github() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "40px" }} ref={ref}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Domain <strong className="purple">Expertise</strong>
      </h1>
      <p style={{ color: "#aaaaaa", textAlign: "center", maxWidth: "600px", margin: "0 auto 30px" }}>
        Self-assessed proficiency across core technical domains, validated through research projects and professional experience.
      </p>
      <Col md={10}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {skills.map((s) => (
            <SkillRing key={s.label} {...s} animate={animate} />
          ))}
        </div>
      </Col>
    </Row>
  );
}

export default Github;
