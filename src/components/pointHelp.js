import styled from "@emotion/styled";

function pointHelp() {
  return (
    <Container>
      <Styledh1>포인트 등록.</Styledh1>
      <Styledh2>
        포인트 등록은 회원만 가능합니다. 우측의 포인트 등록 버튼을 클릭하고
        등록할 포인트를 지도상에서 클릭해주세요.
      </Styledh2>
      <Styledh2>
        * 이미 존재하는 포인트의 반경 50m에는 새로운 포인트 등록이 불가능합니다.
        근처의 기존 포인트에 조과를 업데이트 해주세요.
      </Styledh2>
    </Container>
  );
}

export default pointHelp;

const Container = styled.div`
  /* width: 500px;
  height: 500px; */
  font-family: Pretendard-Medium;
  background-color: white;
  border-radius: 10px;
  z-index: 2;
  top: 0;
  left: 0;
  padding: 1rem;
`;

const Styledh1 = styled.h1`
  font-weight: normal;
  font-size: 1.5rem;
`;
const Styledh2 = styled.h1`
  font-weight: normal;
  font-size: 1rem;
`;
