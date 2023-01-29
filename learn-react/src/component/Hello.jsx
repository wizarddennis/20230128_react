function Hello() {
  /*
        JSX(JavaScript and XML)
        - JS 코드를 HTML 구조에 맞게 작성하기 위해 쓰는 문법.
              => 전체 구조 파악이 쉽다.
        - 무조건 하나의 태그를 반환해야 한다.  
              => 여러개의 태그를 사용하려면 하나의 태그로 감싸주어야 한다. (즉, div 태그로 감싸라.)
              => Fragment(<></>)를 이용하면 불필요한 태그 생성을 방지할 수 있다.
        -  JSX 안에서 {} 안에 JS표현식(값)을 포함시킬 수 있다.
        - 닫는 태그가 필요없는 태그는 self-closing 태그를 사용해야 한다.
              =>여는 태그에 '/' 를 붙여서 닫아준다. 예) 아래 input 태그.
   
        - 인라인 스타일은 style 속성에 JS 객체 형태로 지정한다. 중괄호가 2개가 붙는데, 첫번째것은 JS라는 의미고, 안에 두번째 {}는 객체를 의미하기에
          반드시 2개를 넣어야 한다.
             => background-color 처럼 여러 단어의 속성은 카멜케이스로 작성한다. 자바스크립트라 마이너스(빼기) 로 인식되는것을 방지하기 위해서.
        - 이벤트 바인딩은 onClick처럼 카멜 케이스를 사용한다.
        - jsx 도 JS 코드기에 변수에 저정할 수 있다. 예) 아래 element 변수     
        */
  const title = "Hello React";
  const element = <p>P태그입니다.</p>;
  return (
    <>
      <div
        style={{ color: "red", backgoundColor: "#eee" }}
        onClick={() => alert("click")}
      >
        {title + "!!!"}
      </div>
      {element}
      <p></p>
      <input type="text" />
    </>
  );
}

export default Hello;
