import React from "react";
import styled from "@emotion/styled";
import Paper from "@mui/material/Paper";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import PhishingIcon from "@mui/icons-material/Phishing";
import SetMealIcon from "@mui/icons-material/SetMeal";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";

function PointArticle() {
  return (
    <Container>
      <ListItem>
        <ListItemAvatar>
          <Avatar src="https://www.ibric.org/upload/geditor/201305/0.04445000_1369201881.png" />
        </ListItemAvatar>
        <ListItemText primary="버거형" secondary="2022-05-30 19:00" />
        <div>
          <StyledChip icon={<SetMealIcon />} label="배스" />
          <StyledChip
            icon={<PhishingIcon />}
            label="노싱커리그"
            variant="outlined"
          />
        </div>
      </ListItem>
      <img
        src="https://www.ibric.org/upload/geditor/201305/0.04445000_1369201881.png"
        className="zz"
      />

      <ListText>재블린 던지고 담배피고오니 물고있던녀석</ListText>
    </Container>
  );
}

export default PointArticle;

const Container = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  padding: 20px 0;
  .zz {
    width: 100%;
  }
`;

const StyledChip = styled(Chip)`
  margin-left: 0.5rem;
`;

const ListText = styled.div`
  margin-top: 1rem;
  font-family: Pretendard-Regular;
  font-size: 1rem;
`;
