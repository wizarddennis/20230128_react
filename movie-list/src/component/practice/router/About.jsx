import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About</h1>
      <ul>
        <li>
          <Link to="detail/1">게시글 1</Link>
        </li>
        <li>
          <Link to="detail/2">게시글 2</Link>
        </li>
        <li>
          <Link to="detail/3">게시글 3</Link>
        </li>
      </ul>
    </div>
  );
}

export default About;
