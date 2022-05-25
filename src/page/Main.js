import React from "react";
import Grid from "@mui/material/Grid";
import { Link } from 'react-router-dom';
import "./Main.css";

function Main() {
  return (
    <div className="App">
      <Grid className="content-container" container justifyContent="center">
        <Grid className="content1" item md={8} xs={10}>
          <div className="section-container">
            <div className="section1">
              <Link to="/point">
              <div className="section1-hover">
                <h1>포인트 정보</h1>
                <h3>우리가 직접 만드는 전국 배스 포인트.</h3>
              </div>
              </Link>
            </div>
            <div className="section2"></div>
          </div>

          <div className="section-container">
            <div className="section3"></div>
            <div className="section4"></div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
