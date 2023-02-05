// webpack 이라는 도구가 css, 이밎 파일 등 정적 파일을 로딩할 수 있게 해준다.
// import "./App.css";
// id, class의 중복을 방지해준다.
// import styles from "./style.module.css";
import TodoCreate from "./component/TodoCreate";
import TodoHeader from "./component/TodoHeader";
import TodoList from "./component/TodoList";
import styled, { createGlobalStyle } from "styled-components";
import Flex from "./component/Flex";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color : inherit;
  }

  li {
    list-style: none;
  }
`;

function App() {
  return (
    <div>
      <Container>
        <GlobalStyle />

        <TodoHeader />
        <TodoList />
        <TodoCreate />
        {/*<Flex /> */}
      </Container>
    </div>
  );
}

const Container = styled.div`
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.border};
`;

export default App;
