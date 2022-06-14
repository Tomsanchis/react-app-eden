import React, { useState } from "react";

const Home = () => {
  const [count, setcount] = useState(0);
  const [random, setrandom] = useState(0);
  const [input, setinput] = useState("");
  const [text, settext] = useState("");
  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let number = [2,1,0,5,7,9,52,12,45,31];

  const listItems = number.map((number) =>
  <li>{number}</li>
);

  return (
    <main>
      <div>
        <p>Count : {count}</p>
        <button onClick={() => {setcount(count + 1)}}>+</button>
        <button onClick={() => {setcount(count - 1)}}>-</button>
        <button onClick={() => {setcount(0)}}>RESET</button>
      </div>
      <div>
        <p>Random : <span style={{color: random < 5 ? "red" : "green"}}>{random}</span></p>
        <button onClick={() => {setrandom(randomNumber(1, 10))}}>+</button>
      </div>
      <div>
        <input type="text" placeholder="password" onChange={e => {
          setinput(e.target.value)
        }}/>
        {input.length < 12 ? <p>❌</p> : <p>✅</p>}
      </div>
      <div>
        <p>Type Text</p>
        <input type="text"  placeholder="type text" onChange={e => {
          settext(e.target.value);
        }}/>
        <p>Render</p>
        <p  style={{color: text.length < 8 ? "red" : "green"}}>{text}</p>
      </div>
      <div>
        <div>
          <p>{listItems}</p>
        </div>
      </div>
    </main>
  );
};

export default Home;
