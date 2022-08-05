// import { UploadOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { Button, message, Upload } from "antd";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import Typical from "react-typical";
// inmport fs-react from 'fs-react';

import "./UpLoad.css";
function UpLoad() {
  const [user, setUser] = useState('');
  const navigate = useNavigate();
  const checkToken = async () => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/Login");
    } else {
      setUser(jwt_decode(localStorage.getItem("accessToken")));
      console.log("user" , user , jwt_decode(localStorage.getItem("accessToken")));
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
              steps={[`Hello `, 1000 , 'Hello In Our Website to Upload Your File ..' , 1500]}
              loop={Infinity}
              wrapper="p"
            />
          </Row>
        </div>
        <div className="Container">
          <Row>
            <Upload.Dragger
              multiple={true}
              action={"http://localhost:5000/api/file/upload"}
              listType="picture"
              // previewFile
              // onPreview
              status="done"
              beforeUpload={(file) => {
                console.log(file);
              }}
              onChange={(e) => {}}
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
