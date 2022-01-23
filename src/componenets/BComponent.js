import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { CountContext } from '../contexts/CountContext';

const BComponent = () => {
  const countContext = useContext(CountContext)
  return(
    <div>
      <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
      <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
      <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
    </div>
  );
};

export default BComponent