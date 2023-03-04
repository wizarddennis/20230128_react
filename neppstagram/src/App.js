import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Edit from "./components/pages/Edit";
import Search from "./components/pages/Search";
import Profile from "./components/pages/Profile";
import Auth from "./components/pages/Auth";
import MainSection from "./components/common/MainSection";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import Post from "./components/pages/Post";

function App() {
  return (
    <div>
      <Routes>
        {/* auth는 메뉴가 없도록 해야 함. 로그인 후 메뉴가 보이도록 구성할 계획임. */}
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="/" element={<MainSection />}>
          <Route path="" element={<Home />} />
          <Route path="edit" element={<Edit />} />
          <Route path="search" element={<Search />} />
          <Route path="profile" element={<Profile />} />
          <Route path="posts/:id" element={<Post />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
