import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './action/index'

function App() {
  const counter = useSelector(state => state.counter)

  const isLogged = useSelector(state => state.logedreducer)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Contador {counter}</h1>
      <button onClick={() => dispatch(increment(10)) }>+</button>
      <button onClick={() => dispatch(decrement()) }>-</button>
      {isLogged ? <h3>Cool Login</h3> : <h3>Mal login</h3>}
      
    </div>
  );
}

export default App;
