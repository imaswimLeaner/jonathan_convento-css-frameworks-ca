import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVimeoV } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col xs={12} md={4} className="my-3 footer-element">
            <FontAwesomeIcon icon={faVimeoV} size="2x" />
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </Col>
          <Col xs={6} md={4} className="my-3 footer-element">
            hello@yay.com
          </Col>
          <Col xs={6} md={4} className="my-3 footer-element">
            Copyright 2021 FEU-Ca
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;