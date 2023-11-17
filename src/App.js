import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./page/Main";
import MyPage from "./page/MyPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </div>
  );
}

export default App;
