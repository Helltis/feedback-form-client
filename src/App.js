import styled from "styled-components";
import Decorations from "./components/Decorations/Decorations";
import FeedbackFooter from "./components/FeedbackFooter/FeedbackFooter";
import Form from "./components/Form/Form";

function App() {
  const Body = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 150px;
    margin-top: 100px;
    @media (max-width: 768px) {
      margin-left: 30px;
      margin-top: 80px;
    }
  `;
  const Title = styled.p`
    color: #3e3e3e;
    font-weight: 400;
    font-size: 40px;
    @media (max-width: 768px) {
      font-size: 30px;
    }
  `;
  const Wrapper = styled.div`
    z-index: 100;
    position: relative;
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: space-between;
  `;

  return (
    <Wrapper>
      <Body>
        <Title>Reach out to us!</Title>
        <Form />
      </Body>
      <Decorations />
      <FeedbackFooter />
    </Wrapper>
  );
}

export default App;
