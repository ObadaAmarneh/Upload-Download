// import { UploadOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { Button, message, Upload } from "antd";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
// inmport fs-react from 'fs-react';

import "./UpLoad.css";
function UpLoad() {
  const navigate = useNavigate();

  const checkToken = async () => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/Login");
    }
    // if (token) {
    // }
  };
  useEffect(() => {
    checkToken();
  }, []);
  return (
    <div className="Container">
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
    </div>
  );
}
export default UpLoad;
