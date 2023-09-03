
import './App.css';

import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';



const App=()=>{

  
  const[progress,setProgress]=useState(0)
  
  
    return (
      <div>
      <Router>
      <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={progress}
      
      />
      <Routes>
        <Route exact path="/" element={<News setProgress={setProgress}  key='general' pageSize={6} country="in" category="general"/>}></Route>
        <Route exact path="/Business" element={ <News setProgress={setProgress} key='business'  pageSize={6} country="in" category="business"/>}></Route>
        <Route exact path="/Entertainment" element={<News setProgress={setProgress} key='entertainment'  pageSize={6} country="in" category="entertainment"/>}></Route>
        <Route exact path="/General" element={ <News setProgress={setProgress} key='general'  pageSize={6} country="in" category="general"/>}></Route>
        <Route exact path="/Health" element={ <News setProgress={setProgress} key='health'  pageSize={6} country="in" category="health"/>}></Route>
        <Route exact path="/Science" element={ <News setProgress={setProgress} key='science'  pageSize={6} country="in" category="science"/>}></Route>
        <Route exact path="/Sports" element={ <News setProgress={setProgress} key='sports'  pageSize={6} country="in" category="sports"/>}></Route>
        <Route exact path="/Technology" element={ <News setProgress={setProgress}  key='technology}>' pageSize={6} country="in" category="technology"/>}></Route>

      </Routes>
      </Router>
    </div>
    )
  }

export default App