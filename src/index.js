import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  // your code here
  
  return (
    <button onClick={props.reset}>
      Reset
    </button>
  )
};

const Application = () => {

  // your code here
  const [text, setText] = useState('Bacon');
  const reset = () => {
    console.log("reset");
    // your code here
    setText('');
  };

  return (
    <main>
      <input value={text} onChange={(event) => setText(event.target.value)} placeholder="Type something!"></input>
      <Button reset={reset} />
      {text ? <h1>Hello {text}</h1> : <h1>Hello Bacon</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
