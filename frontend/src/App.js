import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from "./Auth/Login";
import Register from "./Auth/Register";

function App(){
    // let [auth,setAuth] = useState(false)
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link> |
                <Link to="/login">Login</Link> |
                <Link to="/register">Register</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
            </Routes>
        </Router>
    );
}

function Home(){
    return (<h2>Home</h2>)
}

export default App;

