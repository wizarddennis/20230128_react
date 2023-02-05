import styled from "styled-components";

function Flex() {
  return (
    <Container>
      <Item>ITEM</Item>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row; // 아이템의 나열 방향
  justify-content: center; //주축에 대한 나열 방법, flex-start, flex-end, space-between, space-around, space-evenly
  align-items: center; // 교차축에 대한 나열 방법..기본값이 stretch 임..늘리는것.
  flex-wrap: wrap; //공간이 부족할 때 아이템의 줄바꿈 여부지정
  /* width: 500px; */
  height: 300px;
  border: 3px solid red;
`;

const Item = styled.div`
  width: 100px;
  height: 100px;
  background: black;

  flex-basis: 100px; // 아이템의 최소 너비이자 기준점..

  color: #fff;
  border: 3px solid green;

  &:nth-child(1) {
    flex-grow: 1; //공간이 남았을때 가져가는 비율.
    flex-shrink: 0; //공간이 부족할 때 줄이는 비율...
  }
  &:nth-child(2) {
    flex-grow: 2;
    flex: 1; //남은 여백을 혼자 가져갈수 있다.
  }
`;

export default Flex;
