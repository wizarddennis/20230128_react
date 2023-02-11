import { Route, Routes } from "react-router-dom";
import About from "./component/practice/router/About";
import Home from "./component/practice/router/Home";
import Header from "./component/practice/router/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about/*" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
