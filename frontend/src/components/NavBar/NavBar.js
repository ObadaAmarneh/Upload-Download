import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import jwt_decode from "jwt-decode";
import { BiUser } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import "./NavBar.css";

function NavBar() {
  const [token, setToken] = useState("");

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
      {token && jwt_decode(token).email == "admin@gmail.com" ? (
        <>
          <Navbar bg="light" expand="sm">
            <Navbar.Brand>
              <Nav.Link href="/AdminPage" style={{ marginLeft: "50px" }}>
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
              <Nav.Link style={{ marginRight: "25px", fontSize: "20px" }}>
                <Nav.Link>
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
      ) : token && jwt_decode(token).email != "admin@gmail.com" ? (
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
              <Nav.Link style={{ marginRight: "25px", fontSize: "20px" }}>
                <Nav.Link>
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
              <Nav.Link href="/Login" style={{ marginLeft: "50px" }}>
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
