import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Main from "./page/Main";
import Point from "./page/Point";
import Youtube from "./page/Youtube";
import Login from "./page/Login";
import Join from "./page/Join";
import Store from "./page/Store";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";

const theme = createTheme({
  typography: {
    fontFamily: ["Pretendard-Regular", "Pretendard-Bold"].join(","),
  },
  palette: {
    primary: {
      main: '#333333',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
}); //Material UI 폰트, 색 변경

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header"></header>
        <Router>
          <Nav />
          <Routes className="zz">
            <Route path="/" element={<Main />} />
            <Route path="/point" element={<Point />} />
            <Route path="/store" element={<Store />} />
            <Route path="/youtube" element={<Youtube />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
