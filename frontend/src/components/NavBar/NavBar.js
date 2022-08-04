import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Navbar, Container, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import "./NavBar.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";

function NavBar() {
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const Logout = (e) => {
    e.preventDefault();
    console.log("hi");
    window.localStorage.clear();
    window.location.reload();
  };
  useEffect(() => {
    setToken(localStorage.getItem("accessToken"));
  }, []);
  return (
    <>
      {token ? (
        <>
          <Navbar bg="light" expand="sm">
            <Navbar.Brand>
              <Nav.Link href="/Home" style={{ marginLeft: "50px" }}>
                <div className="Icon-Container">
                  <span className="Icon">
                    <AiOutlineHome />
                  </span>
                  <p className="Text">Home</p>
                </div>
              </Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav.Link
                href="Login"
                style={{ marginRight: "25px", fontSize: "20px" }}
              >
                <Nav.Link href="/Login">
                  <div
                    className="Icon-Container"
                    onClick={(e) => {
                      Logout(e);
                    }}
                  >
                    <span className="Icon">
                      <BiUser />
                    </span>
                    <p className="Text">Log out</p>
                  </div>
                </Nav.Link>
              </Nav.Link>
            </Navbar.Collapse>
          </Navbar>
        </>
      ) : (
        <>
          <Navbar bg="light" expand="sm">
            <Navbar.Brand>
              <Nav.Link href="/Home" style={{ marginLeft: "50px" }}>
                <div className="Icon-Container">
                  <span className="Icon">
                    <AiOutlineHome />
                  </span>
                  <p className="Text">Home</p>
                </div>
              </Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav.Link
                href="Login"
                style={{ marginRight: "25px", fontSize: "20px" }}
              >
                <Nav.Link href="/Login">
                  <div className="Icon-Container">
                    <span className="Icon">
                      <BiUser />
                    </span>
                    <p className="Text">Sign In</p>
                  </div>
                </Nav.Link>
              </Nav.Link>
            </Navbar.Collapse>
          </Navbar>
        </>
      )}
    </>
  );
}

export default NavBar;
