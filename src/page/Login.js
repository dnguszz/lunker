import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";

function Login() {
  return (
    <StyledGrid className="content-container" container justifyContent="center">
      <Grid item md={2} xs={10}>
        <Container>
          <TempLogo>Lunker</TempLogo>
          <StyledTextField
            id="outlined-required"
            label="이메일ID"
            size="small"
            fullWidth="true"
          />
          <StyledTextField
            id="outlined-required"
            label="비밀번호"
            size="small"
            fullWidth="true"
          />
          <StyledButton fullWidth="true" variant="contained">
            로그인
          </StyledButton>
          <StyledButton fullWidth="true" variant="outlined">
            회원가입
          </StyledButton>
          <StyledButton fullWidth="true" variant="outlined">
            <img
              src={require("statics/images/google-logo.png")}
              alt="google-logo"
            />
            구글 계정으로 로그인
          </StyledButton>
        </Container>
      </Grid>
    </StyledGrid>
  );
}

export default Login;

const StyledGrid = styled(Grid)`
  height: calc(100vh - 48px);
  font-size: 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const TempLogo = styled.div`
  font-family: Pretendard-Bold;
  font-size: 3rem;
`;

const StyledTextField = styled(TextField)`
  font-family: Pretendard-Regular;
  margin: 0.5rem 0;
`;

const StyledButton = styled(Button)`
  font-family: Pretendard-Regular;
  margin: 0.5rem 0;
  img {
    height: 1.5rem;
  }
`;
