import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import FormGroup from "@mui/material/FormGroup";
import styled from "@emotion/styled";
import Alert from "@mui/material/Alert";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { auth, fireStore, storage } from "firebase-config";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function Join() {
  const [email, setEmail] = useState(""); //필수
  const [password, setPassword] = useState(""); //필수
  const [validPassword, setValidPassword] = useState("");
  const [nickName, setNickName] = useState(""); //필수
  const [profileImg, setProfileImg] = useState("null"); //선택

  const [emailState, setEmailState] = useState("null"); //null = 빈값, duplicate = 중복, incorrect = 형식 어긋남, correct = 가능
  const [passwordState, setPasswordState] = useState("null"); //null = 빈값, short = 6자 이하 ,different = 확인값이랑 다름,  correct = 가능
  const [nickNameState, setNickNameState] = useState("null"); //null = 빈값, short = 2자 미만 , duplicate = 중복, correct = 가능

  const emailCheck = async () => {
    //이메일 중복확인 버튼 클릭
    let regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (!regExp.test(email)) {
      setEmailState("incorrect");
      return;
    } else {
      const querySnapshot = await getDocs(
        collection(fireStore, "email-in-use")
      );
      let nickNameDupFlag = false;
      querySnapshot.forEach((doc) => {
        if (email === doc.data().email) {
          setEmailState("duplicate");
          nickNameDupFlag = true;
          return;
        }
      });

      if (nickNameDupFlag) return;
      //이메일 중복 검사
      setEmailState("correct");
      return;
    }
  };

  const passwordCheck = () => {
    if (password.length < 6) {
      setPasswordState("short");
      return;
    }
    if (password !== validPassword) {
      setPasswordState("different");
      return;
    }
    setPasswordState("correct");
    return;
  };

  const nickNameCheck = async () => {
    if (nickName.length < 2) {
      setNickNameState("short");
      return;
    } else {
      const querySnapshot = await getDocs(
        collection(fireStore, "nickname-in-use")
      );
      let nickNameDupFlag = false;
      querySnapshot.forEach((doc) => {
        if (nickName === doc.data().nickName) {
          setNickNameState("duplicate");
          nickNameDupFlag = true;
          return;
        }
      });

      if (nickNameDupFlag) return;
      //닉네임 중복 검사
      setNickNameState("correct");
      return;
    }
  };

  const register = async () => {
    try {
      const storageRef = ref(storage, uuidv4());
      let profileImgURL = "";

      await uploadString(storageRef, profileImg, "data_url").then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          profileImgURL = url;
        });
      });
      const user = await createUserWithEmailAndPassword(auth, email, password);
      // 1. 이메일과 패스워드로 회원가입.
      if (auth.currentUser != null) {
        updateProfile(auth.currentUser, {
          displayName: nickName,
          photoURL: profileImgURL,
        })
          .then(() => {
            navigate(`/`);
            //성공했으니 로그인정보 가지고 메인페이지로
          })
          .catch((error) => {
            console.log(error);
          });
        await addDoc(collection(fireStore, "email-in-use"), {
          email,
        });

        await addDoc(collection(fireStore, "nickname-in-use"), {
          nickName,
        });
        //중복이 불가능한 이메일과 닉네임 파이어스토어에 추가.
      }
      // 2. 닉네임과 프로필사진 설정
    } catch (error) {
      console.log(error.message);
    }
  };

  const onImgChange = async (event) => {
    const {
      target: { files },
    } = event; //es6문법인거같은데 자세히 봐야겠네요.
    const file = files[0]; //어차피 하나만 업로드되니 첫번째 파일
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setProfileImg(result);
      //이미지 문자열로 변경하고 이거 프로필이미지 state에 담습니다.
    };
    reader.readAsDataURL(file);
    //적용된 이미지는 회원가입 버튼 누르면 스토리지에 저장되고 그 url이 회원정보에 담깁니다.
  };

  useEffect(() => {
    passwordCheck();
  }, [password, validPassword]);

  const navigate = useNavigate();

  return (
    <StyledGrid className="content-container" container justifyContent="center">
      <Grid item md={3} xs={10}>
        <Container>
          <TempLogo>Lunker</TempLogo>
          <StyledFormGroup row>
            <StyledTextField
              id="outlined-required"
              label="이메일ID"
              fullWidth={true}
              size="small"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <StyledButton
              size="small"
              variant="contained"
              onClick={() => emailCheck()}
              disableElevation
            >
              중복확인
            </StyledButton>
          </StyledFormGroup>

          {emailState === "correct" && (
            <StyledAlert severity="success">
              사용 가능한 이메일 주소 입니다.
            </StyledAlert>
          )}

          {emailState === "incorrect" && (
            <StyledAlert severity="error">
              올바른 형식의 이메일을 입력해주세요.
            </StyledAlert>
          )}

          {emailState === "duplicate" && (
            <StyledAlert severity="error">
              중복된 이메일 주소입니다.
            </StyledAlert>
          )}
          <StyledTextField
            id="outlined-required"
            label="비밀번호"
            size="small"
            type="password"
            fullWidth={true}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <StyledTextField
            id="outlined-required"
            label="비밀번호 확인"
            size="small"
            type="password"
            fullWidth={true}
            onChange={(e) => {
              setValidPassword(e.target.value);
            }}
          />
          {passwordState === "correct" && (
            <StyledAlert severity="success">
              사용 가능한 비밀번호 입니다.
            </StyledAlert>
          )}

          {passwordState === "short" && (
            <StyledAlert severity="error">
              6자 이상의 비밀번호를 입력해주세요.
            </StyledAlert>
          )}

          {passwordState === "different" && (
            <StyledAlert severity="error">
              비밀번호가 확인값과 다릅니다.
            </StyledAlert>
          )}
          <StyledAvatar src={profileImg} sx={{ width: 100, height: 100 }} />
          <StyledButton fullWidth={true} variant="contained" component="label">
            프로필 사진 등록(선택)
            <input type="file" accept="image/*" onChange={onImgChange} hidden />
          </StyledButton>
          <StyledFormGroup row>
            <StyledTextField
              id="outlined-required"
              label="닉네임"
              fullWidth={true}
              size="small"
              onChange={(e) => {
                setNickName(e.target.value);
              }}
            />
            <StyledButton
              size="small"
              variant="contained"
              onClick={() => nickNameCheck()}
              disableElevation
            >
              중복확인
            </StyledButton>
          </StyledFormGroup>
          {nickNameState === "correct" && (
            <StyledAlert severity="success">
              사용 가능한 닉네임 입니다.
            </StyledAlert>
          )}

          {nickNameState === "short" && (
            <StyledAlert severity="error">
              2글자 이상의 닉네임을 입력해주세요.
            </StyledAlert>
          )}

          {nickNameState === "duplicate" && (
            <StyledAlert severity="error">
              중복된 닉네임이 존재합니다.
            </StyledAlert>
          )}

          {emailState === "correct" &&
          passwordState === "correct" &&
          nickNameState === "correct" ? (
            <StyledButton
              onClick={register}
              fullWidth={true}
              variant="contained"
            >
              회원가입
            </StyledButton>
          ) : (
            <StyledButton fullWidth={true} variant="contained" disabled>
              회원가입
            </StyledButton>
          )}
        </Container>
      </Grid>
    </StyledGrid>
  );
}

export default Join;

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
  font-size: 0.75rem;
  margin: 0.5rem 0;
  img {
    height: 1.5rem;
  }
`;

const StyledFormGroup = styled(FormGroup)`
  flex-wrap: nowrap;
  width: 100%;
`;

const StyledAlert = styled(Alert)`
  width: 100%;
`;

const StyledAvatar = styled(Avatar)`
  margin-top: 0.75rem;
`;
