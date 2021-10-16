import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import TabImg1 from "../assets/TabImgs/tab-1.jpg";
import TabImg2 from "../assets/TabImgs/tab-2.jpg";
import TabImg3 from "../assets/TabImgs/tab-3.jpg";

function ContentAccordion() {
  return (
    <Accordion defaultActiveKey="0" className="d-md-none">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            First
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
            venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
            ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
            condimentum mattis rhoncus. <img src={TabImg1} alt="old tv" />
            <div className="share">
              Share
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Second
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
            venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
            ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
            condimentum mattis rhoncus. <img src={TabImg2} alt="frames in wall" />
            <div className="share">
              Share
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="2">
            Third
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
            venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
            ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
            condimentum mattis rhoncus. <img src={TabImg3} alt="Old Container with window" />
            <div className="share">
              Share
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default ContentAccordion;