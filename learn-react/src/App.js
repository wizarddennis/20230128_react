import "./App.css";
import Hello from "./component/Hello"; //확장자 jsx 를 붙여도 되고, 안붙여도 된다.

function App() {
  return (
    <>
      <Hello title="seok" color="red" />
      <Hello backgroundColor="yellow" />
      <Hello />
      <Hello>
        <p>자식요소입니다.</p>
      </Hello>
      <Hello />
    </>
  );
}

export default App;
