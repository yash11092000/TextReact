// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import Aboutus from './components/Aboutus';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');//wheter dark mode is enables or not
  const [text,settext] = useState("Enable Light Mode");
  // const [buttoncol, setbuttoncol] = useState("primary");
  const [alert, setAlert] = useState(null);

  const showAlert= (message,type) =>{
    setAlert({
            msg:message,
            type:type
            })
            setTimeout(() => {
              setAlert(null)
            }, 1500);
     }  

  const togglemode = () =>{
      if(mode === 'light'){
        setmode('dark');
        settext('Enable Light Mode')
        document.body.style.backgroundColor = '#17315c';
        showAlert("Dark mode has been enabled","success");
      }
      else{
        setmode('light');
        settext('Enable Dark Mode')
        document.body.style.backgroundColor = 'white';
        showAlert("light mode has been enabled","success");
      }
  }
  
  return (
    <>
    {/* <Router> */}
<Navbar title="TextUtils" mode={mode} togglemode={togglemode} toggletext={text}/> 
<Alert alert={alert}/>
<div className="container my-3">
{/* <Switch>
          <Route exact path="/aboutus">
            <Aboutus/>
          </Route> */}
          {/* <Route exact path="/"> */}
          <Textform heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
          {/* </Route> */}
{/* // </Switch> */}
{/* // </Router> */}
</div>

    </>
  );
}

export default App;
