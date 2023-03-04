import styled, { css } from "styled-components";

const Input = styled.input`
  ${({ width }) => css`
    width: ${width || 200}px;
    border: 1px solid #f2f2f2;
    padding: 5px;
    outline: none;
  `}
`;

export default Input;
