import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextFrom from './Components/TextFrom';
import Alert from './Components/Alert';
import About from './Components/About';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 1000);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert("Dark Mode has been enabled", "success");
    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light Mode has been enabled", "success");
    }
  }

  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />

      <div className="container my-4">
        <Switch>
          <Route exact path="/">
            <TextFrom
              showalert={showalert}
              heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces   "
              mode={mode}
            />
          </Route>

          <Route exact path="/about">
            <About  mode={mode} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
