import './App.css';
import React from "react"
import Nav from "./Components/Nav/Nav";
import Slide from "./Components/Slide/Slide";
import Hero from "./Components/Hero/Hero";
import Main from "./Components/Main/Main";
import Select from "./Components/Select/Select"
import LogIn from "./Components/LogIn/LogIn";





function App() {
  return (
    <div>
      <Nav />
      <Slide />
      <Select />
      <Main />
      <Hero />
       {/* <LogIn />  */}
      </div>
  );
}

export default App;
