import { useParams, useSearchParams } from "react-router-dom";

const list = [
  { id: 1, text: "게시글 내용입니다." },
  { id: 2, text: "리액트 라우터를 공부 중입니다." },
  { id: 3, text: "중첩 라우팅이 어렵습니다." },
  { id: 4, text: "그렇군요..어려워요..." },
];

function Detail() {
  //const params = useParams();
  //console.log(params);

  const { id } = useParams(); // path 파라미터를 가져올 수 있다. 문자열로 넘어온다.

  // 주소창에서 QueryString의 변수와 값을 구할 때 사용
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("name"));

  const post = list.find((item) => item.id === parseInt(id));

  // 테스트 해보고 싶으면...주소창에 쿼리 스트링을 넣어야 함.
  // 예) http://localhost:3000/about/1?hello=%22dennis%22&haha=%22kaka%22
  for (let key of searchParams.keys()) {
    console.log(key);
  }

  return (
    <div>
      <h2> 상세보기 {id} </h2>
      {post.text}
    </div>
  );
}

export default Detail;
