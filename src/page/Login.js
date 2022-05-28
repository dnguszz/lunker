import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "firebase-config";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");

  const navigate = useNavigate();

  const login = () => {
    signInWithEmailAndPassword(auth, email, passWord)
      .then((result) => {
        console.log(result);
        //const user = result.user;
        navigate(`/`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        navigate(`/`);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(error);
        // ...
      });
  };

  return (
    <StyledGrid className="content-container" container justifyContent="center">
      <Grid item md={2} xs={10}>
        <Container>
          <TempLogo>Lunker</TempLogo>
          <StyledTextField
            id="outlined-required"
            label="이메일ID"
            size="small"
            fullWidth={true}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {/* {@가 안들어가면 alert} */}
          {/* {정보 틀리면 alert} */}
          <StyledTextField
            id="outlined-required"
            label="비밀번호"
            size="small"
            fullWidth={true}
            onChange={(e) => {
              setPassWord(e.target.value);
            }}
          />
          <StyledButton fullWidth={true} variant="outlined" onClick={login}>
            로그인
          </StyledButton>
          <StyledLink to="/join">
            <StyledButton fullWidth={true} variant="contained">
              회원가입
            </StyledButton>
          </StyledLink>
          <StyledButton
            fullWidth={true}
            variant="outlined"
            onClick={loginWithGoogle}
          >
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

const StyledLink = styled(Link)`
  width: 100%;
`;
