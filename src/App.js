import { useState } from "react";
import { FaStar } from "react-icons/fa";
import ReactDOM from "react-dom"
import "./index.css"

const createArray =(length)=>[...Array(length)];

function Star ({selected = false , onSelect}){
  return ( <FaStar color={selected ?"red": "grey"}
  onClick={onSelect}
  />);
}

function StarRating({ totalStars =5}){
  const [selectedStars, setselectedStars] = useState(0);

  return(<>
     {createArray(totalStars).map((n,i)=>(
    <Star
    key={i} 
    selected={ selectedStars > i}
    onSelect={() => setselectedStars(i + 1)}
    />
  ))}
  <p>
  {selectedStars} of {totalStars}
</p>
</>
)}

function App(){
  return (<StarRating totalStars={10}/>)
}


//////use stete\\\\\\
// import './App.css';
// import { useState } from 'react';
// function App() {

//   const [checked, setchecked] =useState("false")
//   return (
//     <>
//        <h1>you are cute? <br/> </h1>
//        <input type='checkbox' value={checked}
//         onChange={() => setchecked((checked) => !checked)}/>
//        <h4>{checked ? "checked" : "not checked"}</h4>
//        </>
//   );
// }

export default App;
