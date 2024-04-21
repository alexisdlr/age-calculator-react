import styled from "styled-components";
import Calculator from "./components/Calculator";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #f0f0f0;  
  @media (max-width: 600px) {
    padding:0 3rem;
  }
`;

function App() {
  return (
    <Container>
      <Calculator />
    </Container>
  );
}

export default App;
