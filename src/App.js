import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light")//Whether dark mode is enable or not
  const [text, setText] = useState("Enable dark Mode")
  const [alert, setAlert] = useState(null)
  const showAlert=(message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
       setAlert(null)
      },1500)
  }
  const toggleMode=()=>{
    if(mode==="light"){
      setMode ("dark");
      setText("Disable dark Mode");
      document.body.style.backgroundColor = "#042743"
      showAlert("dark mode is enable", "success")
    } else{
          setMode ("light");
          setText("Enable Dark mode")
          document.body.style.backgroundColor = "white"
          showAlert("light mode is enable", "success")
    }
  };
  return (
    <>
  {/* <Router> */}
   <Navbar  title="TextUtils" about="about us" value={text} mode= {mode} togglemode = {toggleMode} />
   <Alert alert={alert}/>
   <div className='container my-3'>
   {/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>}/>
           
          <Route
    exact path="/" */}
    {/* element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} */}
  {/* /> */}
  <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>

    {/* </Routes> */}
   </div>
   {/* </Router>      */}
</>
  );
}

export default App;
