import React from 'react';
import './App.css';
import Quiz from './components/Quiz/Quiz.component';
import Boxes from './components/Boxes/Boxes.component';
import HelloWorld from './components/Basics/HelloWorld';
import Buttons from './components/4.1-Buttons/Buttons';
import Cards from './components/4.2-Cards/Cards';
import { render } from '@testing-library/react';
import Increment from './components/7.1-increment/Increment';
import HideAndSeek from './components/7.2-HideAndSeek/HideAndSeek';
import InrementDecrement from './components/7.3-Increment_Decrement/IncrementDecrment';
import BoxAnimation from './components/8.1-Box-animation/BoxAnimation';
import FavouriteColor from './components/8.1-life-cycle-methods/FavouriteColoe';
import ChangingColor from './components/8.2-Changing-box/ChangingColor';
import Timer from './components/9.1-Spinner/Timer';


function App() {
  const data=['Hello', 'World']
  const number1 = 5;
  const number2 =6;
  return (
    <div className="App">
      <Timer />
    </div>
  );
}

export default App;
