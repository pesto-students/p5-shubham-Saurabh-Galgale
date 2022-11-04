import react, { useState } from 'react';
import './App.css';

function App() {
  let [input, setInput] = useState("");
  let [change, setChange] = useState([]);
  let setFn = () => {
    setChange((changeArr) => {
      for(let el of changeArr) {
        input = input.toLowerCase();
        if(el == input) {
          return [...changeArr];
        }
      }
      return [...changeArr, input.toLowerCase()];
    });
    setInput("");
  }
  let inputFn = (event) => {
    setInput(event.target.value)
  }

  return (
    <>
    <div className='maindiv'>
    <div className='inbtn'>
    <input className='input'
    placeholder='Add here...'
    value={input}
    onChange={inputFn}
    /><button className='btn' onClick={setFn}>Add</button>
    </div>
    <div className='todo'>
    {change.map((prev) => {
      return <div className='tododiv'><h1 className='todoh1'> {prev} </h1></div>
    })}
    </div>
    </div>
    </>
  );
}

export default App;
