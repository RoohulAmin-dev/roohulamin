import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Roohul Amin, </span>{" "}
            learning and buiding <span className="purple">Machine Learning and Agentic AI projects</span>.
            <br />
            I’m currently studying @ Northern University in {" "}
            <span className="purple"> Computer Science Department</span> in{" "}
            <span className="purple"> Nowshera, Khyber Pakhtunkhwa, Pakistan</span>.
            <br />I completed my High school degree in {" "}
            <span className="purple"> Nowshera </span> from{" "}
            <span className="purple"> HCI Canadian based college and school</span>.
            <br />
            <br />
            Besides learning and building real-life useful projects, I also love to explore technology, lead my classmates for innovation, travel and explore new places. I am a very
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies and building real-life useful projects 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Leading Classmates for Innovation 🎯
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Creativity is the name of deep thinking and consistent action"{" "}
          </p>
          <footer className="blockquote-footer">Roohul Amin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
