import { Col, Row, Card, Button } from "react-bootstrap";
import axios from "axios";
import FileDownload from "js-file-download";

import React, { useState, useEffect } from "react";

import "./Download.css";
function Download() {
  const [allFiles, setAllFiles] = useState();
  useEffect(() => {
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
      .get(`http://localhost:5000/api/file/download${id}`, {
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
                <>
                  <Col>
                    <Card className="Card-Container">
                      <Card.Img
                        variant="top"
                        style={{
                          width: "100%",
                          height: "300px",
                          borderRadius: "none",
                        }}
                        src={`http://localhost:5000/images/${elem.name}`}
                      />
                      <Card.Body>
                        <Card.Title style={{ textAlign: "center" }}>
                          {" "}
                          {elem.name}
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
                            downloadFile(elem.name, elem._id);
                          }}
                        >
                          Download
                        </Button>
                      </Row>
                    </Card>
                  </Col>
                </>
              );
            })}
        </Row>
      </div>
    </>

    // <div className="Container">
    //   {allFiles &&
    //     allFiles.map((elem) => {
    //       console.log("elem", elem);
    //       return (
    //         <div key={elem._id}>
    //           <img
    //             src={`http://localhost:5000/images/${elem.name}`}
    //             width="100px"
    //           />
    //           <button
    //             className="createAcc"
    //             type="submit"
    //             onClick={() => {
    //               downloadFile(elem.name, elem._id);
    //             }}
    //           >
    //             Download
    //           </button>
    //         </div>
    //       );
    //     })}
    // </div>
  );
}
export default Download;
