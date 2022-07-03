import React from "react";
import styled from "@emotion/styled";
import Paper from "@mui/material/Paper";
import CloseIcon from "@mui/icons-material/Close";
import PointArticle from "components/PointArticle";
import PointArticleList from "components/PointArticleList";

function PointDetailModal({ onClose }) {
  return (
    <Wrapper onClick={onClose}>
      <Container
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <h1>경기 화성시 봉담읍 덕머루서길 27-4</h1>
        <h3>243건의 조과가 있습니다.</h3>
        <StyledCloseIcon fontSize="large" onClick={onClose} />
        {/* <PointArticle></PointArticle> */}
        <PointArticleList></PointArticleList>
        <PointArticleList></PointArticleList>
        <PointArticleList></PointArticleList>
        <PointArticleList></PointArticleList>
        <PointArticleList></PointArticleList>
      </Container>
    </Wrapper>
  );
}

export default PointDetailModal;

const Wrapper = styled.div`
  position: absolute;
  justify-content: center;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 900;
`;
const Container = styled(Paper)`
  position: relative;
  overflow-y: scroll;
  z-index: 902;
  /* width: calc(100% - 1rem);
  height: calc(100% - 1rem); */
  width: 600px; //1200 ~ 600px
  max-height: 100%;
  margin: 1.5rem;
  h1 {
    font-family: Pretendard-Regular;
  }
  h3 {
    font-family: Pretendard-Regular;
  }
`;

const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  z-index: 901;
  top: 12px;
  right: 12px;
`;
