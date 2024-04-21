import { useState } from "react";
import styled from "styled-components";
import Form from "./Form";
import Results from "./Results";
import Button from "./Button";

const Wrapper = styled.div`
  min-width: 600px;
  background-color: #fff;
  border-radius: 10px 10px 100px 10px;
  padding: 4rem;

  @media (max-width: 600px) {
    min-width: 100%;
    padding: 2rem;
  }
`;

const Calculator = () => {
  const [date, setDate] = useState({ years: 0, months: 0, days: 0 });
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });
  const calculateAge = () => {
    // Calculate age
    const currentDate = new Date();
    const birthDate = new Date(date.years, date.months - 1, date.days);

    const currentTimestamp = currentDate.getTime();
    const birthTimestamp = birthDate.getTime();
    const ageDifference = currentTimestamp - birthTimestamp;

    const years = Math.floor(ageDifference / (1000 * 60 * 60 * 24 * 365.25));

    const months = Math.floor(
      (ageDifference % (1000 * 60 * 60 * 24 * 365.25)) /
        (1000 * 60 * 60 * 24 * 30.4375)
    );

    const days = Math.floor(
      (ageDifference % (1000 * 60 * 60 * 24 * 30.4375)) / (1000 * 60 * 60 * 24)
    );

    console.log(years, months, days);
    setAge({ years, months, days });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate({ ...date, [e.target.name]: parseInt(e.target.value) });
  };
  return (
    <Wrapper>
      <Form onChange={handleChange} />
      <Button calculateAge={calculateAge} />
      <Results years={age.years} months={age.months} days={age.days} />
    </Wrapper>
  );
};

export default Calculator;
