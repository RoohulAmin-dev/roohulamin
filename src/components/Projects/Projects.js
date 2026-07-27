import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Python Journey"
              description="I was learning Python to build a strong foundation in Artificial Intelligence, Machine Learning, Deep Learning, Agentic AI and Generative AI.
              I realized that learning every topic of Python is not necessary, so I focused on the most relevant areas.
              In this jouney I start from basic Python and then move to advance topics of Python."
              ghLink="https://github.com/RoohulAmin-dev/AI_Learning_Journey"
    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="My First Website"
              description="My first create website project using simple HTML, CSS and JavaScript. This is was my first project where I learned how to create a website and host it on the internet. This project was a great learning experience for me and I learned a lot about web development."
              ghLink="https://github.com/RoohulAmin-dev/RoohulAmin-dev.github.io"
              demoLink="https://roohulamin-dev.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Hotel Management System"
              description="Hotel Management System project using Java.
              This is a console based project which manages the hotel rooms, customers and bookings. This project was a great learning experience for me and I learned a lot about Java programming."
              ghLink="https://github.com/RoohulAmin-dev/Java-Hotel-CLI"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Medical Store Management System"
              description="Medical Store Management System project using Java.
              This is a console based project which manages the medical store inventory, customers and sales. This project was a great learning experience for me and I learned a lot about Java programming.
              This project can control the inventory and sales of a medical store. This was first project I worked on as a team."
              ghLink="https://github.com/RoohulAmin-dev/medicine-Management-System"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Software Testing and Quality Assurance"
              description = "This was our end of semester project where we learned about software testing methodologies and quality assurance practices. During this project I learnt how lead my team and learn new things. I also learned how to create a presentation and present it in front of the class. This project was a great learning experience for me and I learned a lot about software testing and quality assurance. I was very glad when our team was able to achieve the first position in the class."
              ghLink="https://github.com/RoohulAmin-dev/Software_Testing_and_Quality_Assurance_Presentation"
              demoLink="https://roohulamin-dev.github.io/Software_Testing_and_Quality_Assurance_Presentation/"       
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
