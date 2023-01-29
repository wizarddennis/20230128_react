function Hello({ title, color, backgroundColor, children }) {
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
        
        파라미터 키(이름)값과 전달받을 변수명이 동일하면 하나만 쓸 수 있다.  예) 아래 참조..
        style={{ color: color, backgoundColor: "#eee" }} ==> style={{ color, backgoundColor: "#eee" }} 쓸수 있다.

        사용자 지정 컴포넌트의 여는 태그와 닫는 태그 사이의 내용(자식)은 props.children 으로 넘어온다.
        props에 children 이 자동으로 포함되므로, 반드시 children 으로 사용해야함..(예약어임)
        => 복잡한건 자식요소로 넣어라....

        props 에서 넘겨주지 않는 값들을 디폴트 처리하고 싶으면... 컴포넌트명.defaultProps 를 사용해라
        */

  //  console.log(props);
  //   const { title } = props; // 비구조화 할당하기 위해서...{props.title} 사용하는걸 간략히 쓰고싶어서....
  //const title = "Hello React";
  const element = <p>P태그입니다.</p>;
  return (
    <>
      <div style={{ color, backgroundColor }} onClick={() => alert("click")}>
        {title + "!!!"}
      </div>
      {element}
      <p></p>
      <input type="text" />
      {children}
    </>
  );
}

// property 가 updefined 되었을때, 즉 props 가 전달되어지지 않았을때, 기본 적용할 값들...
Hello.defaultProps = {
  title: "React",
  color: "green",
};

export default Hello;
