import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Hero from "./components/Hero";
import Intro from "./components/Intro";
import ContentAccordion from "./components/ContentAccordion";
import ContentTabs from "./components/ContentTabs";

function Home() {
  return (
    <>
      <Hero />
      <Container className="py-3">
        <Intro />
        <Row>
          <Col>
            <ContentAccordion />
            <ContentTabs />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;