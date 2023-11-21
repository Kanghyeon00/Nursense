import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./page/Main";
import MyPage from "./page/MyPage";
import Register from "./page/Register";
import Login from "./page/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
