import styled from "@emotion/styled";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import FishTemp from "./FishTemp.json";
import { style } from "@mui/system";

console.log(FishTemp.fish);

const toFullString = (fish) => {
  let str = "";
  str += fish.place + " ";
  str += fish.size + " ";
  str += fish.lure + " ";
  return str;
};
function CurrentFish() {
  return (
    <Container>
      <h3>Latest Catched Point</h3>
      <List style={{ width: "100%", height: "100%", overflow: "auto" }}>
        {FishTemp.fish.slice(0,10).map((fishs, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar src={fishs.url}></Avatar>
            </ListItemAvatar>
            <ListItemText
              secondary={toFullString(fishs)}
              primary={fishs.date}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: inherit !important;
  position: absolute;
  right: 0;
  top: 0;
  font-family: Pretendard-Regular;
  h3 {
    font-family: Pretendard-Regular;
    color: black;
    font-size: 1.5rem;
    margin: 0;
    padding: 0.7rem;
  }

  .MuiListItemText-primary {
    font-size: 0.75rem;
  }
  .MuiListItemText-secondary {
    font-size: 1rem;
  }
`;

export default CurrentFish;
