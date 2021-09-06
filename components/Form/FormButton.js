import styled from "styled-components";

const FormButton = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #071b2d;
  color: #fff;
  margin-bottom: 20px;
  margin-top: ${({ noTopPadding }) => (noTopPadding ? "null" : "20px")};
  opacity: ${({ disabled }) => (disabled ? 0.25 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "initial")};
  :hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 760px) {
    margin-bottom: 10px;
  }
`;

export default FormButton;