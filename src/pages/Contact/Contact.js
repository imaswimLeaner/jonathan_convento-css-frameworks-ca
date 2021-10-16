import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";

function Contact() {
  return (
    <Container className="py-4">
      <Row>
        <Col xs={12} md={6} className="order-md-2">
          <ContactInfo />
        </Col>
        <Col xs={12} md={6} className="order-md-1">
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;