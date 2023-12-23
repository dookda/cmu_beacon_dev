import { useState } from 'react';
import { BubbleUI, BubbleItem } from 'react-bubble-ui-v2';
// import 'react-bubble-ui-v2/dist/index.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const options = {
    size: 180,
    minSize: 20,
    gutter: 8,
    provideProps: true,
    numCols: 6,
    fringeWidth: 160,
    yRadius: 130,
    xRadius: 220,
    cornerRadius: 50,
    showGuides: false,
    compact: true,
    gravitation: 5
  }

  // const children = props.data.map((data, i) => {
  // 	 return <Child data={data} className="child" key={i}>
  // });

  return (
    <>
      <BubbleUI options={options} className="myBubbleUI">
        <BubbleItem>Item 1</BubbleItem>
        <BubbleItem>Item 2</BubbleItem>
        <BubbleItem>Item 3</BubbleItem>
        {/* Add as many BubbleItems as you need */}
      </BubbleUI>
    </>
  )
}

export default App
