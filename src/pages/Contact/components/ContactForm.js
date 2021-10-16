import React from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

function ContactForm() {
  return (
    <>
      <h1>Submit your details</h1>
      <Form className="contact-form p-3">
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Label>Website</Form.Label>
        <InputGroup>
          <InputGroup.Prepend>
          <InputGroup.Text>https://</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control type="text" />
        </InputGroup>

        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows="6" />
        </Form.Group>

        <Form.Group>
          <Form.Check
            type="checkbox"
            label="Allow us to sell your personal details to whomever we want"
          />
        </Form.Group>

        <Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}

export default ContactForm;