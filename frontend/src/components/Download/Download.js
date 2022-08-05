import { Col, Row, Card, Button } from "react-bootstrap";
import axios from "axios";
import FileDownload from "js-file-download";
import jwt_decode from "jwt-decode";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Download.css";
function Download() {
  const navigate = useNavigate();
  const [allFiles, setAllFiles] = useState();

  const checkToken = async () => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/Login");
    } else if (
      jwt_decode(localStorage.getItem("accessToken")).email !=
        "admin@gmail.com" &&
      localStorage.getItem("accessToken")
    ) {
      navigate("/Home");
    }
  };
  useEffect(() => {
    checkToken();
    axios
      .get(`http://localhost:5000/api/file`)
      .then((res) => {
        setAllFiles(res.data.files);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const downloadFile = (name, id) => {
    console.log("elem._id", id);
    axios
      .get(`http://localhost:5000/api/file/download/${id}`, {
        responseType: "blob",
      })
      .then((res) => {
        FileDownload(res.data, name);
      });
  };
  return (
    <>
      <div
        style={{
          padding: "25px 15px 25px 15px",
        }}
      >
        <div style={{ margin: "10px 0px 20px 0px" }}></div>
        <Row xs={1} md={2} lg={4} className="g-4">
          {allFiles &&
            allFiles.map((elem) => {
              return (
                <div key={elem._id.toString()}>
                  <Col>
                    <Card className="Card-Container">
                      <Card.Img
                        variant="top"
                        style={{
                          width: "100%",
                          height: "300px",
                          borderRadius: "none",
                        }}
                        src={
                          elem.type == "image/png"
                            ? `http://localhost:5000/images/${elem.fileName}`
                            : require("./images/file_img.png")
                        }
                      />
                      <Card.Body>
                        <Card.Title>
                          <span style={{ float: "left" }}>
                            {" "}
                            {elem.userName}
                          </span>

                          <span style={{ float: "right" }}>
                            {" "}
                            {elem.fileName}{" "}
                          </span>
                        </Card.Title>
                        <Card.Text></Card.Text>
                      </Card.Body>
                      <Row
                        style={{ padding: "10px", margin: "2px 0px 8px 0px" }}
                      >
                        <Button
                          variant="outline-primary"
                          type="submit"
                          style={{ width: "50%", margin: "auto" }}
                          onClick={() => {
                            downloadFile(elem.fileName, elem._id);
                          }}
                        >
                          Download
                        </Button>
                      </Row>
                    </Card>
                  </Col>
                </div>
              );
            })}
        </Row>
      </div>
    </>
  );
}
export default Download;
