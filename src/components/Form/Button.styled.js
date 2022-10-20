import styled from "styled-components";

export const Button = styled.button`
  border-radius: 500px;
  background: #fad34f;
  color: #ffffff;
  font-family: "Apercu Arabic Pro";
  font-weight: 400;
  font-size: 18px;
  width: 220px;
  height: 70px;
  border: none;
  text-align: center;
  cursor: pointer;
  transition-duration: 0.4s;
  position: relative;

  &:after {
    content: "";
    background: #90ee90;
    display: block;
    position: absolute;
    width: 220px;
    height: 70px;
    opacity: 0;
    transition: all 0.8s;
    border-radius: 500px;
    top: 0;
    left: 0;
  }
  &:active:after {
    padding: 0;
    margin: 0;
    opacity: 0.5;
    transition: 0s;
  }
`;
