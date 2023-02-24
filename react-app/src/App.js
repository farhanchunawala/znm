// import React from 'react';
// // import React, { Component } from "react";
// // import axios from 'axios';
// // import { useState } from "react";
// import './App.css';
// import Component1 from './components/Component1.jsx';
// import Component2 from './components/Component2.jsx';
// import AxiosDemo from './components/AxiosDemo.jsx';

// function App() {
// 	return (
// 		<div className="App">
// 			<AxiosDemo/>
// 			<Component1/>
// 			<Component2/>
// 		</div>
// 	)
// }

// export default App;

// import React, { Component } from "react"
import React from "react"
import {render} from "react-dom"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Component1 from './components/Component1.jsx';
import Component2 from './components/Component2.jsx';
import AxiosDemo from './components/AxiosDemo.jsx';

function App(props) {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<AxiosDemo/>} />
                <Route path='/c1' element={<Component1/>} />
                <Route path='/c2' element={<Component2/>} />
            </Routes>      
         
        </Router>
    );
  }
  
  export default App;

const appDiv = document.getElementById("app");
render(<App />, appDiv);
