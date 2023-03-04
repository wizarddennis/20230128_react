import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ width, bgColor, color }) => css`
    width: ${width || 200}px;
    border: none;
    outline: none;
    padding: 5px;
    background-color: ${bgColor || "#3953c9"};
    color: ${color || "#fff"};
    cursor: pointer;

    /* 버튼과 버튼이 만났을때....&는 자기 자신을 의미 */
    /* & + & {
      margin-top: 4px;
    } */
  `}
`;

export default Button;
