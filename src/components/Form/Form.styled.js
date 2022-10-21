import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  & > *::placeholder {
    color: #2d2d2d;
    font-weight: 400;
    font-size: 18px;
  }
  & > input {
    border-radius: 10px;
    border: 1px solid #dcdcdc;
    padding: 35px 30px;
    color: #2d2d2d;
    font-weight: 400;
    font-size: 18px;
    width: 560px;
    font-family: "Apercu Arabic Pro";
    @media (max-width: 768px) {
      width: 80%;
    }
  }
`;
export const Name = styled.input`
  margin-bottom: 8px;
  margin-top: 30px;
`;
export const Mail = styled.input`
  margin-bottom: 8px;
`;
export const Message = styled.textarea`
  margin-bottom: 23px;
  height: 120px;
  resize: none;
  border-radius: 10px;
  border: 1px solid #dcdcdc;
  padding: 35px 30px;
  color: #2d2d2d;
  font-weight: 400;
  font-size: 18px;
  width: 560px;
  font-family: "Apercu Arabic Pro";
  @media (max-width: 768px) {
    width: 80%;
  }
`;
