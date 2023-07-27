// import logo from './logo.svg';
import './App.css';

import React from "react";
import HeaderComponet from './MyComponent/Header';
// import BodyComponent from './MyComponent/Body';
import FooterComponent from './MyComponent/Footer';
import { Outlet } from "react-router-dom";




//Composition -- putting one component inside another component

//props

// JSX should have one parent element

// React Fragment

function App() {
  return (
  <>
    <HeaderComponet/>
    <Outlet/>
    <FooterComponent/>
  
  </>
  
  );
};

export default App;

// Config driven UI
