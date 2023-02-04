import { useEffect, useState } from "react";

function Effect() {
  // 상태관리
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // useEffect() :  생명주기에 따라서 실행될 사이드 이펙트(부수효과)를 콜백함수로 전달한다.
  // 의존성 배열을 전달하지 않았을때, 렌더링 이후에 실행이 된다.
  useEffect(() => {
    //
    console.log("렌더링이 끝나고, 매번 호출");
  });

  // 의존성 배열이 비었을 때 : 화면에 처음 나타날 때 한번만 실행된다.
  // => 초기값 설정할 때, 라이브러리 연동, setTimeout 등 한번만 실행시

  useEffect(() => {
    console.log("마운트시 1번만 호출");

    // return 문을 넣으면....
    // 뒷정리함수(cleanup) : 라이브러리 연동 해제, 스케줄 취소 등.
    return () => {
      console.log("언마운트시 호출");
    };
  }, []);

  //의존하는 값이 변했을때만 실행하게 하고 싶을 때
  useEffect(() => {
    // 변경된 후 실행.
    console.log(count);

    // return 문을 넣으면....
    // ☆ 변경 직전에 실행---> 원리가 뭘까.....어떻게 뒤에 있는게
    // 먼저 실행이 될 수 있지????
    return () => console.log(count);
  }, [count]);

  // 렌더링시 실행됨
  console.log("render");

  return (
    <div>
      <h1>useEffect</h1>
      {count}
      <button onClick={() => setCount(count + 1)}>+1</button>
      <div>
        <h2>{input}</h2>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
      </div>
    </div>
  );
}

export default Effect;
