import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row, Form, Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import "./SignUp.css";

function SignUp() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reTypePassword, setReTypePassword] = useState("");
  const [variant, setVariant] = useState("danger");
  const [errorMessage, setErrorMessage] = useState("");

  const showErrorMessage = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage("");
    }, 3500);
  };

  const Sign_UpCheck = async (e) => {
    e.preventDefault();
    if (firstName && lastName && email && password && reTypePassword) {
      if (
        password == reTypePassword &&
        password.length >= 8 &&
        reTypePassword.length >= 8
      ) {
        const data = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        };
        await axios
          .post(`http://localhost:5000/api/user/signup`, data)
          .then((res) => {
            if (res.data.success) {
              navigate("/Login");
            } else {
              showErrorMessage(res.data.message);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        if (password.length >= 8 && reTypePassword.length >= 8) {
          showErrorMessage("Passwords do not match. Please re-enter password");
          setVariant("warning");
          setTimeout(() => {
            setErrorMessage("");
            setVariant("danger");
          }, 3500);
        } else {
          showErrorMessage("Password must be more than 8 digit");
        }
      }
    } else {
      showErrorMessage("Please make sure all fields are filled in correctly");
    }
  };
  return (
    <>
      <div className="SigUp-From">
        <Form>
          {errorMessage ? (
            <Row>
              <Alert variant={variant}>
                <p className="Error_Title"> {errorMessage} </p>
              </Alert>
            </Row>
          ) : (
            ""
          )}
          <p className="Title"> Sign up </p>
          <Row>
            <Col>
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label className="Sub_Title">First name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your first name"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label className="Sub_Title">Last name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your last name"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label className="email Sub_Title">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ex: example@gmail.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3 Sub_Title" controlId="formBasicEmail">
                <Form.Label className="Sub_Title">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Type Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <Form.Text
                  style={{ fontSize: "0.78rem" }}
                  className="text-muted"
                >
                  Password must be more than 8 digit
                </Form.Text>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3 Sub_Title"
                controlId="formBasicPassword"
              >
                <Form.Label className="Sub_Title">Re-type Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Re-type Password"
                  onChange={(e) => {
                    setReTypePassword(e.target.value);
                  }}
                />
                <Form.Text
                  style={{ fontSize: "0.78rem" }}
                  className="text-muted"
                >
                  Password must be more than 8 digit
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Text
              style={{
                fontSize: "0.93rem",
                textAlign: "center",
                padding: "5px 15px 2px 0px",
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
              onClick={(e) => {
                Sign_UpCheck(e);
              }}
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
