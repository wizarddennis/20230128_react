//  최상단의 Navigation 메뉴 만들기
// index.css 에 추가로

import { Link } from "react-router-dom";
import styled from "styled-components";
// 아이콘 가져오기...
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineEdit,
  AiOutlineUser,
} from "react-icons/ai";

const navList = [
  { id: 1, text: "Home", url: "/home" },
  { id: 2, text: "Search", url: "/search" },
  { id: 3, text: "Edit", url: "/edit" },
  { id: 4, text: "Profile", url: "/profile" },
];

function Header() {
  return (
    <Container>
      <Wrapper>
        <Logo>Neppstagram</Logo>
        <Input />
        <Gnb>
          <ul>
            <li>
              <Link to="/">
                <AiOutlineHome size={24} />
              </Link>
            </li>
            <li>
              <Link to="/search">
                <AiOutlineSearch size={24} />
              </Link>
            </li>
            <li>
              <Link to="/edit">
                <AiOutlineEdit size={24} />
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <AiOutlineUser size={24} />
              </Link>
            </li>
          </ul>
        </Gnb>
      </Wrapper>
    </Container>
  );
}

//
const Container = styled.header`
  padding: 10px 0;
  border-bottom: 1px solid #bbb;
`;

// 가운데로 모아주면서....전체 옆으로 퍼지는 크기를 정하기 위해서...Container 안에 Wrapper 를 사용함.
const Wrapper = styled.div`
  display: flex; /* 수평으로 아이템을 나열할려고...*/
  align-items: center;
  justify-content: space-between;
  max-width: 900px; /* 전체 크기를 제한함...수직으로 item 을 정렬하기도 편함.*/
  flex: 1;
  margin: 0 auto; /* 헤더중에 가운데로 움직이게*/
`;

const Logo = styled.h1``;

const Gnb = styled.nav`
  /* flex: 1; */
  ul {
    display: flex; /* 오른쪽으로 수평되게 나열하기 위해서....*/
    flex: 1;
    gap: 20px;
    margin-left: 30px;
  }
`;

const Input = styled.input`
  /* margin-left: 60px; */
`;

export default Header;
