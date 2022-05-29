import { combineReducers } from "redux";
import userInfo from "./userInfo";
//사용될 파일 여기에 임포트하고

const rootReducer = combineReducers({ userInfo }); //임포트한거 이 객체에 넣어줍니다.

export default rootReducer;
