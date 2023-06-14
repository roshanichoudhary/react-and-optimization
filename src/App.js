import React, { useCallback, useState } from 'react';
import Button from './components/UI/Button/Button';
import './App.css';
import DemoOutput from './components/DemoOutput';

function App() {
  console.log('app is running');

  const [showPara, setShowPara] = useState(true);
  const [allowToggle, setAllowToggle] = useState(false);

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle)
      setShowPara(prevShowPara => !prevShowPara);
  }, [allowToggle])

  const allowToggleHandler = () => {
    setAllowToggle(prevState => !prevState);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showPara} />
      <Button onClick={toggleParagraphHandler}>Click Me</Button>
      <Button onClick={allowToggleHandler}>Allow Togle</Button>
    </div>
  );
}

export default App;
