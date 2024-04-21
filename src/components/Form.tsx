import { useState } from "react";
import styled from "styled-components";
import { ValidationRules } from "../types";

const FormContainer = styled.form`
  display: flex;
  gap: 1rem;
  margin: 0 auto;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label<{ $error?: boolean }>`
  font-size: 12px;
  font-weight: bold;
  color: ${({ $error }) => ($error ? "red" : "#716f6f")};
  letter-spacing: 3px;
`;

const Input = styled.input<{ $error?: boolean }>`
  padding: 1rem 0.7rem;
  max-width: 100px;
  border: 1px solid ${({ $error }) => ($error ? "red" : "#dcdcdc")};
  border-radius: 6px;
  font-size: 20px;
  font-weight: 800;
  color: #000;
  letter-spacing: 2px;
  transition: all 0.3s ease-in-out;

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  &:focus {
    outline: 1px solid ${({ $error }) => ($error ? "red" : "#854dff")};
    border: 1px solid ${({ $error }) => ($error ? "red" : "#854dff")};
  }
  &:-internal-autofill-selected {
    background-color: transparent !important;
  }

  @media (max-width: 600px) {
    max-width: 50px;
    font-size: 14px;
    padding: 0.5rem 0.7rem;
  }
`;

const Error = styled.span`
  color: red;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
  margin-top: 0.5rem;
  display: ${({ children }) => (children ? "block" : "none")};

  @media (max-width: 600px) {
    font-size: 8px;
    margin-top: 0.3rem;
  }
`;


const validationRules: ValidationRules = {
  days: {
    regex: /^\d{1,2}$/,
    min: 1,
    max: 31,
  },
  months: {
    regex: /^\d{1,2}$/,
    min: 1,
    max: 12,
  },
  years: {
    regex: /^\d{4}$/,
    min: 1900,
    max: 2100,
  },
};

const Form = ({
  onChange,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({
    days: "",
    months: "",
    years: "",
  });

  const validateField = (name: string, value: string) => {
    const rules = validationRules[name];
    const isValid =
      value !== "" &&
      rules.regex.test(value) &&
      parseInt(value) >= rules.min &&
      parseInt(value) <= rules.max;
    return isValid ? "" : `Invalid ${name}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    if (!error) {
      onChange(e);
    }
  };

  return (
    <FormContainer>
      <FormItem>
        <Label htmlFor="days" $error={!!errors.days}>
          DAY
        </Label>
        <Input
          type="text"
          id="days"
          name="days"
          placeholder="DD"
          onChange={handleInputChange}
          $error={!!errors.days}
        />
        <Error>{errors.days}</Error>
      </FormItem>
      <FormItem>
        <Label htmlFor="months" $error={!!errors.months}>
          MONTH
        </Label>
        <Input
          type="text"
          id="months"
          name="months"
          placeholder="MM"
          onChange={handleInputChange}
          $error={!!errors.months}
        />
        <Error>{errors.months}</Error>
      </FormItem>
      <FormItem>
        <Label htmlFor="years" $error={!!errors.years}>
          YEAR
        </Label>
        <Input
          type="text"
          id="years"
          name="years"
          placeholder="YYYY"
          onChange={handleInputChange}
          $error={!!errors.years}
        />
        <Error>{errors.years}</Error>
      </FormItem>
    </FormContainer>
  );
};

export default Form;
