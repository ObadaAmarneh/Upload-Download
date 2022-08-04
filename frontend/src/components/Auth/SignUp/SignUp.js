import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row, Form, Button } from "react-bootstrap";
import axios from "axios";

import "./SignUp.css";
function SignUp() {
  const navigate = useNavigate();
  return (
    <>
      <div className="SigUp-From">
        <Form>
          <p className="Title"> Sign up </p>
          <Row>
            <Col>
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label className="Sub_Title">First name</Form.Label>
                <Form.Control type="text" placeholder="Enter your first name" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label className="Sub_Title">Last name</Form.Label>
                <Form.Control type="text" placeholder="Enter your last name" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label className="email Sub_Title">Email</Form.Label>
              <Form.Control type="email" placeholder="Ex: example@gmail.com" />
            </Form.Group>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label className="Sub_Title">Password</Form.Label>
                <Form.Control type="password" placeholder="Type Password" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3 Sub_Title"
                controlId="formBasicPassword"
              >
                <Form.Label className="Sub_Title">Re-type Password</Form.Label>
                <Form.Control type="password" placeholder="Re-type Password" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Text
              style={{
                fontSize: "0.93rem",
                width: "50%",
                margin: "auto",
                padding: "2px 0px 15px 0px",
              }}
              className="text-muted"
            >
              Already have an account ? <a href="Login">Sign in </a>
            </Form.Text>
          </Row>
          <Row>
            <Button
              variant="outline-primary"
              type="submit"
              style={{ width: "50%", margin: "auto" }}
            >
              Sign up
            </Button>
          </Row>
        </Form>
      </div>
    </>
  );
}

export default SignUp;
