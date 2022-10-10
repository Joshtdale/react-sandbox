// import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

let state = {
  Text: 'FUUUUUCKCKKKKKkkkkkkkkkk Double fuckckckckkkkkckckk',
  number: 0
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className='col mt-5'>
    <button className="btn btn-danger" onClick={handleClick}>
      Clicked {count} times
    </button>
    </div>
  );
}

export default function MyApp() {
  return (
    <div className='text-center m-5'>
      <h1>Counters that update separately</h1>
      <div className='row'>
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />
      
      </div>
      <h1 className='bg-warning m-5 rounded-circle'>{state.Text}</h1>
    </div>
  );
}

