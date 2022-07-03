import React, { useState } from "react";
import styled from "@emotion/styled";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import PhishingIcon from "@mui/icons-material/Phishing";
import SetMealIcon from "@mui/icons-material/SetMeal";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";

function PointArticleList() {
  const [showDetail, setShowDetail] = useState(false);
  const showDetailOnOff = () => {
    setShowDetail(!showDetail);
  };
  return (
    <div>
      <Container onClick={() => showDetailOnOff()}>
        {/* <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}> */}
        <ImageWrapper>
          <img
            src="https://www.ibric.org/upload/geditor/201305/0.04445000_1369201881.png"
            alt="이미지쓰"
          />
        </ImageWrapper>
        <ContentWrapper>
          <Align>
            <Avatar
              alt="Remy Sharp"
              src="https://www.ibric.org/upload/geditor/201305/0.04445000_1369201881.png"
              fontSize="small"
            />
            김목표
          </Align>
          <Align>
            <StyledChip icon={<SetMealIcon />} label="어종 : 배스" />
            <Chip
              icon={<PhishingIcon />}
              label="채비 : 노싱커리그"
              variant="outlined"
            />
          </Align>
          <Align>
            <CalendarMonthIcon />
            날짜 : 2021.10.11
          </Align>
        </ContentWrapper>
      </Container>
      {showDetail && (
        <DetailContainer>
          난 너를 믿었던만큼 난 내 친구도 믿었기에 난 아무런 부담없이 널 내
          친구에게 소개시켜 줬고 그런 만남이 있은 후부터 우리는 자주 함께 만나며
          즐거운 시간을 보내며 함께 어울렸던 것뿐인데 그런 만남이 어디부터
          잘못됐는지 난 알 수 없는 예감에 조금씩 빠져들고 있을때쯤 넌 나보다 내
          친구에게 관심을 더 보이며 날 조금씩 멀리하던
        </DetailContainer>
      )}
    </div>
  );
}

export default PointArticleList;

const Container = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  padding: 12px;
  margin-bottom: 8px;
  &:hover {
    background-color: #f2f2f2;
    cursor: pointer;
  }
`;

const ImageWrapper = styled.div`
  img {
    width: 120px;
    height: 120px;
  }
  margin-right: 30px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Align = styled.div`
  display: flex;
  align-items: center;
  font-family: Pretendard-Regular;
  font-size: 12px;
`;

const StyledChip = styled(Chip)`
  margin-right: 12px;
`;

const DetailContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 1.5rem 3rem;
  font-family: Pretendard-Regular;
  border-bottom: 1px solid #a4a4a4;
  border-top: 1px solid #a4a4a4;
`;
