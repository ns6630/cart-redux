import styled from "styled-components";

const Button = styled.button`
  background: #a4d166;
  padding: 0 1em;
  height: 40px;
  line-height: 40px;
  display: flex;
  align-items: center;
  border-radius: 15px;
  outline: none;
  border: none;

  & > img {
    margin-right: 1em;
    width: 20px;
    height: 20px;
  }

  :hover {
    cursor: pointer;
  }
`;

export default Button;