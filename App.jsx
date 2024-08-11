import { useState } from 'react'
import Accordion from './components/Accordion';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Accordion />
    </div>
  );
}

export default App
