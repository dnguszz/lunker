import styled from "@emotion/styled";
import React, { useState, useEffect, useRef } from "react";
import "./Carousel.css";
import caroTemp from "./caroTemp";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

function Carousel() {
  const [currentSlider, setCurrentSlider] = useState(0);
  const slideRef = useRef(null);
  useEffect(() => {
    slideRef.current.style.transition = "all 0.3s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlider}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentSlider]);

  const NextSlide = () => {
    if (currentSlider >= caroTemp.movies.length - 1) {
      setCurrentSlider(0);
    } else {
      setCurrentSlider(currentSlider + 1);
    }
  };

  const PrevSlide = () => {
    if (currentSlider === 0) {
      setCurrentSlider(caroTemp.movies.length - 1);
    } else {
      setCurrentSlider(currentSlider - 1);
    }
  };
  return (
    <Container>
      <SlideContainer ref={slideRef}>
        {caroTemp.movies.map((movie, index) => (
          <Slide key={index}>
            <img src={movie.image} alt={movie.index} />
            <VideoInfo className="video-info">
              <VideoContent>{movie.name}</VideoContent>
              <VideoTitle>{movie.id}</VideoTitle>
            </VideoInfo>
          </Slide>
        ))}
      </SlideContainer>
      <ArrowWrapper className="arrow-wrapper">
        <ArrowBackIosRoundedIcon
          onClick={PrevSlide}
          style={{ color: "white" }}
          fontSize="large"
        />
        <ArrowForwardIosRoundedIcon
          onClick={NextSlide}
          style={{ color: "white" }}
          fontSize="large"
        />
      </ArrowWrapper>
    </Container>
  );
}

export default Carousel;

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Slide = styled.div`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  position: relative;
  align-items: center;
  img {
    width: 100%;
  }
`;
const VideoInfo = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
`;
const VideoTitle = styled.div`
  font-family: Pretendard-Medium;
  font-size: 1.7em;
  color: white;
  margin: 10px 20px;
`;
const VideoContent = styled.div`
  font-family: Pretendard-Regular;
  font-size: 2em;
  color: white;
  margin: 10px 20px;
`;

const ArrowWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
