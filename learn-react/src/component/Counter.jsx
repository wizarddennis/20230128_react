import { useState } from "react";

function Counter() {
  /* 
    useState() : 상태값을 만드는 훅
        => 첫번째 인자는 초기값.
        => 반환값 : 배열[상태값, 업데이트 함수]
        => 업데이트 함수를 실행시키면 전달된 인자가 새로운 상태가 된다.
        => 상태가 업데이트되면, 자동으로 렌더링이 다시 일어난다.
    */
  const [count, setCount] = useState(0); // 비구조할당...

  // +1 버튼을 처리하는 코드를 아래처럼 별도로 빼서 할수도 있다.
  const handleCount = () => {
    // 업데이트 함수는 비동기적으로 동작한다. 첫라인을 수행후, 그 다음라인을 기다려주지 않고 바로 실행.
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);

    //함수형 업데이트 => 동기적으로 동작하게 만든다.
    //콜백함수의 첫번째 인자로 최신 상태값이 전달된다.
    //useCallback의 의존성을 제거하는데 효과적이다.
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      /* 이벤트바인딩 함수를 값으로 전달해야 한다.(함수 호출을 하지
      말고....변수에 담아서 전달하라고!!!) */
      <button onClick={handleCount}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
}

export default Counter;
