import styled from "styled-components";

type ContainerProps = {
  done: boolean;
};
export const Container = styled.div(
  ({ done }: ContainerProps) =>
    `
display: flex;
align-items: center;

input{
  width: 25px;
  height: 25px;
  margin-right: 5px;
  cursor: pointer;
} 
label{
  color: #ccc;
  text-decoration: ${done ? "line-through" : "initial"};
}
`
);
