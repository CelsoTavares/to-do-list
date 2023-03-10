import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border: 2px solid #fff;
  border-radius: 15px;
  padding: 10px;
  margin: 20px 0;
  align-items: center;
  background: #15161e;

  svg {
    cursor: pointer;
  }
  input {
    border: 0;
    width: 100%;
    background: transparent;
    outline: 0;
    color: #fff;
    font-size: 18px;
    margin-left: 5px;
  }
  input::placeholder {
    color: #fff;
  }
`;
