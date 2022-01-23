import './App.css';
import CounterOne from './componenets/CounterOne';
import CounterThree from './componenets/CounterThree';
import CounterTwo from './componenets/CounterTwo';

function App() {
  return (
    <div className="App">
      <CounterOne />
      <hr />
      <CounterTwo />
      <hr />
      <CounterThree />
    </div>
  );
}

export default App;
