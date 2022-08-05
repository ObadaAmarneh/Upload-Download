import { Button, Upload } from "antd";
import { Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import Typical from "react-typical";
import "antd/dist/antd.css";
import "./UpLoad.css";

function UpLoad() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const checkToken = async () => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/Login");
    } else if (
      jwt_decode(localStorage.getItem("accessToken")).email ==
        "admin@gmail.com" &&
      localStorage.getItem("accessToken")
    ) {
      navigate("/AdminPage");
    }
  };
  useEffect(() => {
    checkToken();
  }, []);
  return (
    <>
      <div className="upload-page-container">
        <div className="typical-container">
          <Row>
            <Typical
              className="text-typical"
              steps={[
                `Hello `,
                1000,
                "Hello In Our Website to Upload Your File ..",
                2500,
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </Row>
        </div>
        <div className="Container">
          <Row>
            <Upload.Dragger
              multiple={true}
              action={
                (`http://localhost:5000/api/file/upload/obada`)
              }
              listType="picture"
              status="done"
            >
              <div className="Upload-Container">
                <Row>
                  <p className="Upload-Text">Drag files here OR</p>
                </Row>
                <br />
                <Row>
                  <Button>Click to Upload</Button>
                </Row>
              </div>
            </Upload.Dragger>
          </Row>
        </div>
      </div>
    </>
  );
}
export default UpLoad;
