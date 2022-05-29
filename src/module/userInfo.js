//액션과 액션 생성함수, 리듀서 함수를 하나로 합치는 Ducks패턴으로 작성하겠습니다.

//Action type(액션 타입) => 일어날 변경을 명시

const SET_USER = "userInfo/SET_USER";
//우선은 로그인 후 유저 정보를 업데이트하는 액션 하나

//Action Creator Function => 액션 생성 함수
export const setUser = (user) => ({ type: SET_USER, user });

const initialState = {
  user: null,
};

// Reducer function ( 리듀서 함수 )
export default function userInfo(state = initialState, action) {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        user: action.user,
      };
    }
    default:
      return state;
  }
}
