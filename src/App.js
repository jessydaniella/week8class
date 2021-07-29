
import './App.css';
// import First from './component/First.js';
// import Product from './component/Product';
// import Product2 from './component/Product2';
// import React, { useState } from 'react';
import React from "react";
import {Switch, Route, Link} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';



// function App() {
//   // const [count, setCount] = useState(0);
  // const [isLog, setIsLog] = useState(true);

  // const url = 'https://randomuser.me/api/?results=30';

  // const handleClick = () =>{
  //   setCount(count + 1);
    
    
  // };
  // const handleLogClick = () =>{
  //    setIsLog(!isLog);
  // };
  
  // }
  function App() {
  return (
    <div className="App">
      <nav>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/home">Home</a>
      </nav>
      <h1> Hello World</h1>
       <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      </Switch>
{/* {     
      {isLog  ? <p>We are logged in</p> : <p>You are logged out, please sign in</p>}
  <button onClick= {handleLogClick}>{isLog ?  <span>logout</span> : <span>login</span>}</button>
   
    <First />
    <Product />
    <Product2 count={count} handleClick={handleClick}/>  
     */}
     </div>
  );
}

export default App;
