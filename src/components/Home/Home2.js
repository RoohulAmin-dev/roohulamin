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
              I’m a AI Engineer who loves transforming ideas into
              reliable, scalable products. Over time, I’ve explored several
              technologies and found my passion in building high-performance
              systems and intuitive user experiences.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Machine Learning, Deep Learning projects, Python, SQL Server, Frontend Development, and Java{" "}
                </b>
              </i>
              — I enjoy to create real-life useful projects using these technologies.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Making my projects full of value, explore agentic, generative AI, learn full stack development to focus on creating impactful solutions{" "}
                </b>
              </i>
              and exploring new ways to bridge uers and impactful solutions.
              <br />
              <br />
              Whenever possible, I love building projects of
              <b className="purple"> basic Machine Learning, Deep Learning </b> and modern agentic concepts{" "}
              <i>
                <b className="purple">Machine Learning</b> and{" "}
                <b className="purple">Deep Learning</b>.
              </i>
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
