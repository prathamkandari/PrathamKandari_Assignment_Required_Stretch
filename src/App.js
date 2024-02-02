import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './main.js';
import SignUp from './Signup Page/signup.js';

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
        </Routes>
      </Router>
      </>
  );
}

export default App;
