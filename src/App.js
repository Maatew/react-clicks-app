import './App.css';
import Button from './components/button';
import Count from './components/count';
import personalBrand from './images/logo-1.png';
import {useState} from 'react';

function App() {

  const [numberClicks, setNumberClicks] = useState(0);

  const doClick = () => {
    setNumberClicks(numberClicks + 1);
  };

  const resetCount = () => {
    setNumberClicks(0);
  };

  return (
    <div className='App'>
      <div className='logo-container'>
        <img
          className='my-logo' 
          src={personalBrand} 
          alt="lion-logo" />     
      </div>
      <div className='container-principal'>
        <Count numClicks={numberClicks} />
        <Button 
          text='Click'
          buttonClick={true}
          doesClick={doClick} />
        <Button 
          text='Reset'
          buttonClick={false}
          doesClick={resetCount} />        
      </div>
    </div>
  );
}

export default App;
