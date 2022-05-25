import React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Carousel from "components/Carousel";
import CurrentFish from "components/CurrentFish"
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
                  <h3>우리가 직접 만드는 전국 루어낚시 포인트.</h3>
                </div>
              </Link>
            </div>
            <div className="section2">
              <CurrentFish />
            </div>
          </div>

          <div className="section-container">
            <div className="section3">
              <Carousel />
            </div>
            <div className="section4">
            <Link to="/store">
                <div className="section4-hover">
                  <h1>마켓찾기</h1>
                  <h3>더 나은 경험을 위한 온라인 스토어.</h3>
                </div>
              </Link>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
