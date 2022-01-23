import './App.css';

import { reducer, initialState } from './reducer';
import { useReducer } from 'react';
import { CountProvider } from './contexts/CountContext';

// import CounterOne from './componenets/CounterOne';
// import CounterThree from './componenets/CounterThree';
// import CounterTwo from './componenets/CounterTwo';
import AComponent from './componenets/AComponent';
import BComponent from './componenets/BComponent';
import CComponent from './componenets/CComponent';
import DataFetching from './componenets/DataFetching';

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountProvider value={{countState:count, countDispatch:dispatch}}>
      <div className="App">
        Global Count - {count}
        {/* <CounterOne />
      <hr />
      <CounterTwo />
      <hr />
      <CounterThree /> */}
        <AComponent />
        <BComponent />
        <CComponent />
      </div>
      <div>
        <DataFetching />
      </div>
    </CountProvider>
  );
}

export default App;
