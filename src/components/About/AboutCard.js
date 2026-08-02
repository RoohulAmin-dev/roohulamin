import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I’m <span className="purple">Roohul Amin</span>, a Computer Science student who enjoys building practical software solutions and exploring the world of AI. My interest lies in combining full-stack development with modern AI technologies to create products that are both useful and meaningful.
            <br />
            <br />
            I’m currently pursuing my degree at <span className="purple">Northern University Nowshera</span>, where I’ve developed a strong foundation in problem-solving, teamwork, and software development. I also enjoy turning ideas into working projects and learning through hands-on experimentation.
            <br />
            <br />
            Beyond coding, I’m motivated by curiosity, innovation, and creating value through technology. My interests include:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building AI-powered and full-stack projects 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring LLMs, agents, and intelligent systems 🤖
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning through practical problem-solving and collaboration 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            “Creativity is the name of deep thinking and consistent action.”
          </p>
          <footer className="blockquote-footer">Roohul Amin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
