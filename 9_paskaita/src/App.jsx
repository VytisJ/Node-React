import styled, { keyframes } from "styled-components";
import styles from "./App.module.css";
import Card from "./Card";
import Button from "./Button";
import { useState } from "react";
// import "./App.css";

const Container = styled.div`
  padding: 2rem;
`;

const StyledParagraph = styled.p`
  background-color: yellow;
  color: green;
  padding: 1rem;
`;

const OrangeParagraph = styled(StyledParagraph)`
  color: orange;
`;

// background-color: red
// backgroundColor: "red"

const ShiftingCard = styled.div`
  height: 200px;
  width: 200px;
  background-color: ${(props) => (props.$isNight ? "black" : "white")};
  color: ${(props) => (props.$isNight ? "white" : "black")};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    font-size: 1.2rem;
    transition: 300ms;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

const App = () => {
  const [isNight, setIsNight] = useState(true);
  console.log(styles);
  console.log(isNight);
  return (
    <Container>
      <Rotate>My name is Rokas</Rotate>
      <br />
      <br />
      <ShiftingCard onClick={() => setIsNight(!isNight)} $isNight={isNight}>
        Now is {isNight ? "Night" : "day"}
      </ShiftingCard>
      <Button>Test button</Button>
      <br />
      <br />
      <Button $primary>Primary button</Button>
      <br />
      <br />
      <Button disabled>Disabled button</Button>
      <br />
      <br />
      test
      <p style={{ backgroundColor: "red" }}>lorem</p>
      <p className={styles.test}>Test css module</p>
      <StyledParagraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
        sapiente, recusandae odit expedita aliquam laborum voluptas optio
        tempora temporibus natus, at cum dicta, quibusdam cupiditate quisquam
        est eius ex vero.
      </StyledParagraph>
      <OrangeParagraph>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem
        sit corrupti pariatur harum nam cum numquam perferendis praesentium
        quidem dolorum quibusdam cumque debitis laboriosam quod similique facere
        soluta adipisci.
      </OrangeParagraph>
      <div className={styles.card}>Hello from card</div>
      <br />
      <Card />
      test
    </Container>
  );
};

export default App;
