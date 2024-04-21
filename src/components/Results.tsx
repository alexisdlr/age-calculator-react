import styled from "styled-components";

const P = styled.p`
  font-size: 100px;
  font-weight: 800;
  color: #000;
  letter-spacing: -2px;
  font-style: italic;
  text-align: center;
  line-height: 1;
  margin: 0;
  padding: 0;

  @media (max-width: 600px) {
    font-size: 40px;
  }
`;
const Span = styled.span`
  color: #854dff;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 1rem;
`;

type Age = {
  years: number;
  months: number;
  days: number;
};

const Results = (age: Age) => {
  const { years, months, days } = age;
  return (
    <Container>
      {years > 0 ? (
        <P>
          <Span>{years}</Span> {years === 1 ? "year" : "years"}
        </P>
      ) : (
        <P>
          <Span>---</Span> years
        </P>
      )}
      {months > 0 ? (
        <P>
          <Span>{months}</Span> {months === 1 ? "month" : "months"}
        </P>
      ) : (
        <P>
          <Span>---</Span> months
        </P>
      )}

      {days > 0 ? (
        <P>
          <Span>{days}</Span> {days === 1 ? "month" : "days"}
        </P>
      ) : (
        <P>
          <Span>---</Span> days
        </P>
      )}
    </Container>
  );
};

export default Results;
