import styled from "styled-components";

export const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, purple, blue);
`;

export const CalculatorCard = styled.div`
  height: 90vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 0.8rem;
  box-shadow: 0 8px 32 px 0 rgba(31, 38, 135, 0.37);

  @media (min-width: 420px) {
    flex-direction: row;
  }
`;
