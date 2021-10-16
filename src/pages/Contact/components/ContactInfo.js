import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function ContactInfo() {
  return (
    <div className="contact-info ml-3">
      <Row className="mb-5">
        <Col xs={1}>
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </Col>
        <Col className="ml-4">hello@yay.com</Col>
      </Row>
      <Row className="mb-5">
        <Col xs={1}>
          <FontAwesomeIcon icon={faPhone} size="2x" />
        </Col>
        <Col className="ml-4">123 456 7890</Col>
      </Row>
      <Row className="mb-5">
        <Col xs={1}>
          <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
        </Col>
        <Col className="ml-4">
          <ul className="address">
            <li>123 Some Street</li>
            <li>Somewhere</li>
            <li>Some City</li>
            <li>10000</li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export default ContactInfo;