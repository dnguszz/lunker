import Grid from "@mui/material/Grid";
import React from "react";
import KakaoMap from "components/KakaoMap";
import styled from "@emotion/styled";
function Point() {
  /*
  포인트 페이지 들어오면 사용자 위치 허락 밭아서 그걸로 맵 좌표 설정 하기
  */

  return (
    <StyledGrid container justifyContent="center">
      <Grid item md={8} xs={10}>
        <KakaoMap>
        </KakaoMap>
      </Grid>
    </StyledGrid>
  );
}

export default Point;

const StyledGrid = styled(Grid)`
  height: calc(100vh - 48px);
`;