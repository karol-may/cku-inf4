import React, { useState } from "react";


function Login(){
    const [loginData,setLoginData] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState(null)

    return (
        <form>
            <input type="email" name="email" id="email" placeholder="e-mail"/>
            <input type="password" name="password" id="password" placeholder="hasło"/>
            <button type="submit">Zaloguj się</button>
        </form>
    );
}

export default Login;