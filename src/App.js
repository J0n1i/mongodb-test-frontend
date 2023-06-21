import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Account from './pages/Account';
import Login from './pages/Login';



function App() {

  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    console.log(authenticated)
  }, [authenticated])

  return (
    <div>
      <div>
        <p>{authenticated ? "Logged in" : "Logged out"}</p>
        <h1>Nav</h1>
        <Link to="/">Home</Link>
        <Link to="/account">Account</Link>
        <Link to="/login">Login</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login setAuthenticated={setAuthenticated}/>} />
      </Routes>
    </div>
  );
}



export default App;
