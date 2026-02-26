import styled, { createGlobalStyle } from "styled-components";
import TextType from "./components/TextType";
import ScrollStack, { ScrollStackItem } from "./components/ScrollStack";
import LiquidEther from "./components/LiquidEther";


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: black;
    overflow-x: hidden;
    font-family: sans-serif;
    color: white;
  }

  .scroll-stack-end {
    height: 100vh; /* sørger for sidste kort frigives korrekt */
  }
`;


const BackgroundWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
`;

const Page = styled.div`
  position: relative;
  z-index: 0;
`;

const Information = styled.section`
  display: fixed;
  height: 50vh;
  width: 20vw;
  text-align: center;
  z-index: 2;
  border: 2px solid blue;
`;

const StackSection = styled.section`
  height: 50vh; /* 3 cards × 100vh hver */
  display: flex;
  padding: 2rem;
  z-index: 1;
  border: 2px solid red;
`;

function App() {
  return (
    <>
      <GlobalStyle />

      {/* Baggrund */}
      <BackgroundWrapper>
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={16}
          iterationsPoisson={16}
          resolution={0.4}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          color0="#5227FF"
          color1="#FF9FFC"
          color2="#B19EEF"
        />
      </BackgroundWrapper>

      {/* Page content */}
      <Page>
        <Information>
          <h1>Information:</h1>
          <p>Tryk for at kopiere til udklipsholder</p>
          <h3>Navn:</h3>
          <TextType
            text="Laurids B. Christoffersen"
            typingSpeed={50}
            loop={false}
            showCursor
            cursorCharacter="_"
            cursorBlinkDuration={0.5}
          />
          <h3>Tlf:</h3>
          <TextType
            text="+45 26 24 69 99"
            typingSpeed={50}
            loop={false}
            showCursor
            cursorCharacter="#"
            cursorBlinkDuration={0.5}
          />
          <h3>Email:</h3>
          <TextType
            text="laur762d@gmail.com"
            typingSpeed={50}
            loop={false}
            showCursor
            cursorCharacter="@"
            cursorBlinkDuration={0.5}
          />
        </Information>

        <StackSection>
          <ScrollStack>
            <ScrollStackItem>
              <h2>Card 1</h2>
              <p>This is the first card in the stack</p>
            </ScrollStackItem>

            <ScrollStackItem>
              <h2>Card 2</h2>
              <p>This is the second card in the stack</p>
            </ScrollStackItem>

            <ScrollStackItem>
              <h2>Card 3</h2>
              <p>This is the third card in the stack</p>
            </ScrollStackItem>
          </ScrollStack>
        </StackSection>
      </Page>
    </>
  );
}

export default App;