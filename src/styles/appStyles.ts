import styled from "styled-components";
import image from "../img/tarefas.jpg";

export const Container = styled.div`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: #fff;
  height: 100%;
  width: 90%;
  margin: 50px auto;
  max-width: 1920px;
`;
export const Space = styled.div`
  margin: auto;
  max-width: 980px;
  padding: 50px 10px;
  min-height: 800px;

  .divList {
    display: flex;
    margin-bottom: 10px;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    background-color: #20212c;
    border-radius: 15px;
  }
  svg:hover {
    scale: 1.1;
    transition: all 0.4s;
  }
  span {
    cursor: pointer;
  }
`;
export const Title = styled.h1`
  text-shadow: 1px -1px 10px #20212c;
  color: #fff;
  text-align: center;
  border-bottom: 1px solid #fff;
  padding-bottom: 20px;
`;
