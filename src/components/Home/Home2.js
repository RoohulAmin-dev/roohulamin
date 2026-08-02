import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A SHORT <span className="yellow"> INTRODUCTION </span> ABOUT ME
            </h1>
            <p className="home-about-body">
              I’m a Computer Science student who enjoys turning ideas into practical software solutions. My focus is on building useful web applications, exploring AI-powered systems, and creating projects that solve real-world problems.
              <br />
              <br />
              I work with
              <i>
                <b className="purple">
                  {" "}React, Next.js, Python, Java, SQL, and modern AI tools{" "}
                </b>
              </i>
              , and I’m especially interested in combining full-stack development with LLMs, agents, and intelligent user experiences.
              <br />
              <br />
              My goal is to keep building projects that are not only technically strong, but also meaningful, scalable, and useful for people.
              <br />
              <br />
              I’m currently exploring
              <b className="purple"> AI agents, generative AI, and full-stack product development</b>
              while continuing to strengthen my foundation in software engineering.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
