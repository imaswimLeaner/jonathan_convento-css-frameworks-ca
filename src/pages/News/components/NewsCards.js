import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import News1 from "../assets/images/news-1.jpg";
import News2 from "../assets/images/news-2.jpg";
import News3 from "../assets/images/news-3.jpg";
import News4 from "../assets/images/news-4.jpg";
import News5 from "../assets/images/news-5.jpg";
import News6 from "../assets/images/news-6.jpg";
import News7 from "../assets/images/news-7.jpg";
import News8 from "../assets/images/news-8.jpg";

function NewsCards() {
  return (
    <>
      <Row className="news-cards">
        <Col md={3}>
          <Card className="my-3">
            <Card.Img variant="top" src={News1} />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="my-3">
            <Card.Img variant="top" src={News2} />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="my-3">
            <Card.Img variant="top" src={News3} />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="my-3">
            <Card.Img variant="top" src={News4} />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="news-cards">
        <Col md={3}>
          <Card className="my-3">
            <Card.Img variant="top" src={News5} />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="my-3">
            <Card.Img variant="top" src={News6} />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="my-3">
            <Card.Img variant="top" src={News7} />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="my-3">
            <Card.Img variant="top" src={News8} />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default NewsCards;