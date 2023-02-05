import { darken, lighten } from "polished";
import styled, { css, keyframes } from "styled-components";

function Button({ text, bgColor, big }) {
  return <SytledButton bgColor={bgColor}>{text}</SytledButton>;
}

const slideUp = keyframes`
    from {
        transfrom : traslateY(20px);
    }`;

const SytledButton = styled.button`
  width: 100px;
  padding: 5px 0;
  border-radius: 15%;
  /* background-color prop이 전돨되면  */
  background-color: ${({ bgColor, theme }) => bgColor || bgColor};
  color: "#fff";
  text-align: center;
  outline: none;
  border: none;

  cursor: pointer;
  user-select: none;

  animation: ${slideUp} 1s;

  ${({ big }) =>
    big &&
    css`
      width: 120px;
      font-size: 1.2rem;
      padding: 10px;
    `}

  &:hover {
    background-color: ${({ bgColor, theme }) => {
      return bgColor ? lighten(0.1, bgColor) : lighten(0.1, theme.colors.main);
    }};
  }

  &:active {
    background-color: ${({ bgColor, theme }) => {
      return bgColor ? darken(0.1, bgColor) : darken(0.1, theme.colors.main);
    }};
  }

  /* 첫번째 요소 빼고 적용할 때 */
  & + & {
    margin-top: 10px;
  }
`;

export const BigButton = styled(SytledButton)`
  width: 200px;
  height: 20px;
`;

export default Button;
