import styled from 'styled-components'
import Arrow from '../assets/images/icon-arrow.svg'

const Container = styled.div`
  display: flex;
  justify-content: between;
  align-items: center;
  width: 100%;
  margin: 4px 0;
  @media (max-width: 600px) {
    position: relative;
    margin: 2.5rem 0;
  }
`;

const Line = styled.div`
  width: 100%;
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: #DCDCDC;
  }
  @media (max-width: 600px) {
    position: absolute;
    width: 100%;
    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background-color: #DCDCDC;
    }
  }
`;
const ButtonC = styled.button`
  background-color: #854DFF;
  border: none;
  border-radius: 100%;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #000;
  }

  img {
    width: 30px;
    height: 30px;
  }
  @media (max-width: 600px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0.5rem;
    img {
      width: 20px;
      height: 20px;
    }
  }
`;


const Button = ({calculateAge}: {
  calculateAge: () => void
}) => {
  return (
    <Container>
      <Line />
      <ButtonC onClick={calculateAge}>
        <img src={Arrow} alt="calculate" />
      </ButtonC>
    </Container>
  )
}

export default Button