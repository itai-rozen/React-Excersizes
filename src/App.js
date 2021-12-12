import './App.css';
import Quiz from './components/Quiz/Quiz.component';
// import Boxes from './components/Boxes/Boxes.component';
// import HelloWorld from './components/Basics/HelloWorld';

function App() {
  const data=['Hello', 'World']
  const number1 = 5;
  const number2 =6;
  // <HelloWorld  data={data} numbers={[number1, number2]} />
  // <Boxes />
  return (
    <div className="App">
      <Quiz />
    </div>
  );
}

export default App;
