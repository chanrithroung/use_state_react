// import Counter from "./components/Counter"
// import Profile from "./components/Profile"
// import './App.css'
// const person = [
//   {
//     id: 1,
//     name: 'Soksan',
//     position: 'teacher'
//   },
//   {
//     id: 2,
//     name: 'Sey ha',
//     position: 'App dev'
//   },
//   {
//     id: 3,
//     name: "Sok Henng",
//     position: "teahcer"
//   }
// ]





// const App = () => {
//   const getUserId = (id) => {
//      console.log(person.find(p => p.id === id));
//   };
//   return person.map(p => <Profile {...p} key={p.id} getId={getUserId}></Profile>)
// }

// const App = () => {
//     return <Profile></Profile>
// } 

// export default App

import React, { useState } from "react";

const App = () => {
    const [useValue, setState] = useState("");
    const placehoder = "Typing Something"
    return <React.Fragment>
        <article>
            <h1>{useValue? useValue : placehoder}</h1>
            <input value={useValue} onChange={(e)=> {
                // console.log(e.target.value);
                // console.log(e.target)
                setState(e.target.value)
            }} type="text" placeholder="Typing something" />
            <button onClick={()=>{
                setState("");
            }}>Clear</button>
        </article>
    </React.Fragment>
}


export default App