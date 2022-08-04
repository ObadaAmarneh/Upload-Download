import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row, Form, Button } from "react-bootstrap";
import jwt_decode from "jwt-decode";
import axios from "axios";

import "./SignIn.css";
function SingIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginCheck = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    console.log("data", data);
    await axios
      .post(`http://localhost:5000/api/user/login`, data)
      .then((res) => {
        if (res.data.token) {
          const decoded = jwt_decode(res.data.token);
          console.log(decoded.email);
          if (decoded.email == "admin@gmail.com") {
            navigate("/AdminPage");
          } else {
            navigate("/Home");
          }
          window.location.reload();
          localStorage.setItem("accessToken", res.data.token);
        } else {
          setEmail("");
          setPassword("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="SignIn-From">
        <Form>
          <p className="Title"> Sign in </p>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label className="email Sub_Title">User / Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email or user"
              onChange={(e) => {
                setEmail(e.target.value);
                console.log("setEmail", e.target.value);
              }}
            />
            <Form.Text style={{ fontSize: "0.8rem" }} className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3 Sub_Title" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e) => {
                setPassword(e.target.value);
                console.log("setPassword", e.target.value);
              }}
              type="password"
              placeholder="Enter Password"
            />
          </Form.Group>

          <Row>
            <Button
              variant="outline-primary"
              type="submit"
              onClick={(e) => {
                loginCheck(e);
              }}
              style={{ width: "50%", margin: "auto" }}
            >
              Sign in
            </Button>
          </Row>
          <Row>
            <Form.Text
              style={{
                fontSize: ".93rem",
                width: "85%",
                marginLeft: "30px",
                padding: "5px 15px 2px 0px",
              }}
              className="text-muted"
            >
              Not have an account yet ? <a href="Signup">Sign up </a>
            </Form.Text>
          </Row>
        </Form>
      </div>
    </>
  );
}

export default SingIn;
