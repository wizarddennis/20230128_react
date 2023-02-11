import { Route, Routes } from "react-router-dom";
import About from "./component/practice/router/About";
import Home from "./component/practice/router/Home";
import Header from "./component/practice/router/Header";
import Post from "./component/practice/post/Post";
import PostEdit from "./component/practice/post/PostEdit";
import PostList from "./component/practice/post/PostList";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path=":id" element={<div>나타납니다</div>} />
        </Route>
        <Route path="about/*" element={<About />} />
        <Route path="post" element={<Post />}>
          <Route path="" element={<PostList />} />
          <Route path="edit" element={<PostEdit />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
