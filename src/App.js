import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Forgotpassword from './components/Forgotpassword';
import Home from './components/Home';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';
import Twostep from './components/Twostep';
import HomeState from './context/user/HomeState';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  return (
    <>
      <HomeState>
        
      <Router>
          {/* <Navbar /> */}
          <Alert alert={alert}/>
          <div className="container">
            <Routes>
              <Route exact path="/login" element={<Login showAlert={showAlert} />}></Route>
              <Route path="/" element={<Home showAlert={showAlert}/>}></Route>
              <Route exact path="/signup" element={<Signup showAlert={showAlert} />}></Route>
              <Route exact path="/forgotpassword" element={<Forgotpassword showAlert={showAlert} />}></Route>
              <Route exact path="/twostep" element={<Twostep showAlert={showAlert} />}></Route>
            </Routes>
          </div>
        </Router>
      </HomeState>
    </>
  );
}

export default App;
