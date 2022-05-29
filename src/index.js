import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createStore } from "redux";
import rootReducer from "./module/index";
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구

const store = createStore(rootReducer, composeWithDevTools());
//rootReducer에서 모든 모듈을 합칩니다.
//스토어는 앱의 상태를 단 하나의 장소에서 보관합니다.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //Provider를 통해 하위 컴포넌트에 공급
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
