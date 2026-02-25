import TextType from "./components/TextType";
import AnimatedList from './components/AnimatedList'
import LiquidEther from './components/LiquidEther';

const items = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10'
  ]; 


function App() {
  return (
    <div style={{ width: '100%', height: 600, position: 'relative' }} className="App">
      <LiquidEther
        colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
        mouseForce={20}
        cursorSize={100}
        isViscous
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
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
      <TextType
        text="Laurids B. Christoffersen"
        typingSpeed={50}
        showCursor
        cursorCharacter="_"
        cursorBlinkDuration={0.5}
      />
      <AnimatedList
        items={items}
        onItemSelect={(item, index) => console.log(item, index)}
        showGradients = {false}
        enableArrowNavigation
        displayScrollbar
      />
    </div>
  );
}

export default App;
