
import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextFrom from './Components/TextFrom';
import Alert from './Components/Alert';
// import About from './Components/About';


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }


  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743'
      showalert("Dark Mode has been enabled ", "success")
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white'
      showalert("Light Mode has been enabled ", "success")
    }
  }
  return (
    <>

        <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-4">
             <TextFrom showalert={showalert} heading="Enter the text to analyze below" mode={mode} />
        </div>
      {/* <Router>

     
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextFrom showalert={showalert} heading="Enter the text to analyze below" mode={mode} />
            </Route>
          </Switch>
      </Router> */}

    </>
  );
}

export default App;
