
import './App.css';
import { useState } from 'react';
function App() {

  const [checked, setchecked] =useState("false")
  return (
    <>
       <h1>you are cute? <br/> </h1>
       <input type='checkbox' value={checked}
        onChange={() => setchecked((checked) => !checked)}/>
       <h4>{checked ? "checked" : "not checked"}</h4>
       </>
  );
}

export default App;
