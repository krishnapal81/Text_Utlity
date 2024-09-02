
import './App.css';
// import About from './components/About';
import TextForm from './components/TextForm'
import Navbar from './components/Navbar';
import React, { useState } from 'react'

// import TextForm from './components/TextForm';
function App() {
  const [mode,setMode]=useState('light');//wheather dark mode is enabled or not


  const togglemode= ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }

  }
  return (
<>
  <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
  <div className="container my-3" >
    <TextForm heading="Enter The Text To Analyze Below" mode={mode}/>
    {/* <About/> */}
  </div>
</>
  );
}

export default App;
