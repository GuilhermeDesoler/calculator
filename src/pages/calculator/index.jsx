import { BackgroundContainer, CalculatorCard } from "./styled.background";

const Calculator = ({ children }) => {
  return (
    <BackgroundContainer>
      <CalculatorCard>{children}</CalculatorCard>
    </BackgroundContainer>
  );
};

export default Calculator;
