import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import Point from "./page/Point";
import Youtube from "./page/Youtube";
import MyPage from "./page/MyPage";
import Store from "./page/Store";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/point" element={<Point />} />
          <Route path="/store" element={<Store />} />
          <Route path="/youtube" element={<Youtube />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
