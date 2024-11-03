// import logo from './logo.svg';
// import './App.css';

import { Route, Routes } from "react-router-dom";
import { Login, Signup } from "./pages";
import Home from "./pages/Home";
import EmailList from "./pages/EmailList";
import AddEmail from "./pages/AddEmail";
import EditEmail from "./pages/EditEmail";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/email" element={<EmailList />} />
        <Route path="/add" element={<AddEmail />} />
        <Route path="/edit/:id" element={<EditEmail />} />
      </Routes>
      
    </div>
  );
}

export default App;
